// The daily nudge. Vercel cron calls this.
//
// Timezones: Vercel cron only fires in UTC, so vercel.json schedules this twice
// (13:30 and 14:30 UTC). Whichever one lines up with 9:30am in the user's
// timezone actually sends; the other sees the wrong local hour and quietly does
// nothing. That keeps 9:30am correct across daylight-saving changes with no
// babysitting. A once-per-day lock makes sure only one send happens.
import {
  ensureVapid, allUserIds, getSubscription, sendTo, buildPayload
} from './_lib/push.js';
import { kv } from '@vercel/kv';

const TZ = process.env.TZ_NAME || 'America/New_York';
const TARGET_HOUR = parseInt(process.env.TARGET_HOUR || '9', 10); // local hour

function localParts(tz) {
  const fmt = new Intl.DateTimeFormat('en-CA', {
    timeZone: tz, hourCycle: 'h23',
    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit'
  });
  const p = Object.fromEntries(fmt.formatToParts(new Date()).map((x) => [x.type, x.value]));
  return { date: `${p.year}-${p.month}-${p.day}`, hour: parseInt(p.hour, 10) };
}

export default async function handler(req, res) {
  // Only let Vercel Cron (or someone with the secret) trigger sends.
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.authorization || '';
    if (auth !== `Bearer ${secret}`) return res.status(401).json({ error: 'unauthorized' });
  }

  const { date, hour } = localParts(TZ);

  // Wrong hour for this timezone (the other daily trigger will be the right one).
  if (hour !== TARGET_HOUR) {
    return res.status(200).json({ skipped: true, reason: 'not 9:30 local', tz: TZ, localHour: hour });
  }

  // Once-per-day lock so a retry or overlap can't double-send.
  const lock = await kv.set(`today:lastrun:${date}`, Date.now(), { nx: true, ex: 60 * 60 * 20 });
  if (lock !== 'OK') {
    return res.status(200).json({ skipped: true, reason: 'already sent today', date });
  }

  try {
    ensureVapid();
  } catch (err) {
    return res.status(500).json({ error: String(err.message || err) });
  }

  const ids = await allUserIds();
  let sent = 0, gone = 0, failed = 0;

  await Promise.all(ids.map(async (id) => {
    const sub = await getSubscription(id);
    if (!sub) { return; }
    const r = await sendTo(id, sub, buildPayload(process.env.APP_URL));
    if (r.ok) sent++; else if (r.gone) gone++; else failed++;
  }));

  return res.status(200).json({ ok: true, date, tz: TZ, recipients: ids.length, sent, gone, failed });
}

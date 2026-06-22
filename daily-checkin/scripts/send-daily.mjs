// The daily nudge — GitHub Actions version.
//
// Runs in GitHub's cloud (see .github/workflows/daily-nudge.yml), not on any
// server you maintain. It reads the push subscription(s) from the PUSH_SUBSCRIPTION
// secret and sends one soft notification with web-push.
//
// Env:
//   VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY   the push keys
//   VAPID_SUBJECT                          mailto: address (optional)
//   PUSH_SUBSCRIPTION                      one subscription object, or a JSON array of them
//   APP_URL                                where a tapped notification opens
//   TZ_NAME      (default America/New_York)
//   TARGET_HOUR  (default 9)               local hour to send
//   FORCE        ('true' to send now, used by the manual "Run workflow" test)
import webpush from 'web-push';

const {
  VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY,
  VAPID_SUBJECT = 'mailto:amberbockel@gmail.com',
  PUSH_SUBSCRIPTION, APP_URL = '/index.html',
  TZ_NAME = 'America/New_York', TARGET_HOUR = '9', FORCE = 'false'
} = process.env;

const OPENERS = [
  'There’s a prompt waiting, if you want it.',
  'The journal’s here when you are.',
  'No pressure — just here if it helps.',
  'A quiet minute, whenever suits you.',
  'Here if you feel like writing. Here if you don’t.',
  'The page is open. No rush at all.',
  'A small check-in, only if it’s wanted.',
  'Whenever you’re ready. Or not today — that’s okay too.'
];
const opener = () => OPENERS[Math.floor(Math.random() * OPENERS.length)];

function localHour(tz) {
  const p = new Intl.DateTimeFormat('en-CA', { timeZone: tz, hourCycle: 'h23', hour: '2-digit' })
    .formatToParts(new Date()).find((x) => x.type === 'hour');
  return parseInt(p.value, 10);
}

function parseSubs(raw) {
  if (!raw) return [];
  const v = JSON.parse(raw);
  return Array.isArray(v) ? v : [v];
}

async function main() {
  if (!VAPID_PUBLIC_KEY || !VAPID_PRIVATE_KEY) {
    console.error('Missing VAPID keys. Set the VAPID_PRIVATE_KEY secret.');
    process.exit(1);
  }

  const force = String(FORCE) === 'true';
  const hour = localHour(TZ_NAME);
  if (!force && hour !== parseInt(TARGET_HOUR, 10)) {
    console.log(`Not the sending hour in ${TZ_NAME} (local hour ${hour}, want ${TARGET_HOUR}). Nothing to do.`);
    return;
  }

  let subs;
  try { subs = parseSubs(PUSH_SUBSCRIPTION); }
  catch (e) { console.error('PUSH_SUBSCRIPTION is not valid JSON.'); process.exit(1); }

  if (!subs.length) {
    console.log('No subscriptions yet. Add the PUSH_SUBSCRIPTION secret once notifications are turned on in the app.');
    return;
  }

  webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);
  const payload = JSON.stringify({ title: 'Today', body: opener(), url: APP_URL });

  let sent = 0, gone = 0, failed = 0;
  for (const sub of subs) {
    try {
      await webpush.sendNotification(sub, payload);
      sent++;
    } catch (err) {
      const code = err && err.statusCode;
      if (code === 404 || code === 410) { gone++; console.warn('A subscription has expired (update the PUSH_SUBSCRIPTION secret).'); }
      else { failed++; console.error('Send failed:', code || err); }
    }
  }
  console.log(`Done. sent=${sent} expired=${gone} failed=${failed} (force=${force}, localHour=${hour}, tz=${TZ_NAME})`);
  if (failed > 0 && sent === 0) process.exit(1);
}

main();

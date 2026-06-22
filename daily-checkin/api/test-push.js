// POST /api/test-push
// Body: { userId }
// Sends one notification right now, so the whole path can be confirmed
// without waiting until 9:30am. This is the button in Settings → "Try it".
import { cors, readJson, ensureVapid, getSubscription, sendTo, buildPayload } from './_lib/push.js';

export default async function handler(req, res) {
  if (cors(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  try {
    ensureVapid();
    const { userId } = await readJson(req);
    if (!userId) return res.status(400).json({ error: 'userId is required.' });

    const sub = await getSubscription(userId);
    if (!sub) return res.status(404).json({ error: 'No subscription found for this device.' });

    const result = await sendTo(userId, sub, buildPayload(process.env.APP_URL));
    if (!result.ok) return res.status(502).json({ error: 'Push was not accepted.', detail: result });
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: String(err && err.message || err) });
  }
}

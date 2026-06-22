// POST /api/subscribe
// Body: { subscription, userId? }
// Stores the push subscription and returns the userId to keep in localStorage.
import { cors, readJson, saveSubscription, newUserId } from './_lib/push.js';

export default async function handler(req, res) {
  if (cors(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  try {
    const { subscription, userId } = await readJson(req);
    if (!subscription || !subscription.endpoint) {
      return res.status(400).json({ error: 'A valid push subscription is required.' });
    }
    const id = (typeof userId === 'string' && userId.length >= 8) ? userId : newUserId();
    await saveSubscription(id, subscription);
    return res.status(200).json({ userId: id });
  } catch (err) {
    return res.status(500).json({ error: 'Could not save subscription.' });
  }
}

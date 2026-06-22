// POST /api/unsubscribe
// Body: { userId }
// Forgets the subscription entirely. Nothing else was ever stored.
import { cors, readJson, removeSubscription } from './_lib/push.js';

export default async function handler(req, res) {
  if (cors(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  try {
    const { userId } = await readJson(req);
    if (!userId) return res.status(400).json({ error: 'userId is required.' });
    await removeSubscription(userId);
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: 'Could not remove subscription.' });
  }
}

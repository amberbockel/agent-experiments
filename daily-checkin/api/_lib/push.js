// Shared bits for the three endpoints and the cron.
// Nothing here stores anything a person wrote — only push subscriptions.

import webpush from 'web-push';
import { kv } from '@vercel/kv';

const SUBS_SET = 'today:subs';            // a set of userIds
const subKey = (id) => `today:sub:${id}`; // one subscription per id

// ---- VAPID -----------------------------------------------------------------
let vapidReady = false;
export function ensureVapid() {
  if (vapidReady) return;
  const pub = process.env.VAPID_PUBLIC_KEY;
  const priv = process.env.VAPID_PRIVATE_KEY;
  const subject = process.env.VAPID_SUBJECT || 'mailto:amberbockel@gmail.com';
  if (!pub || !priv) throw new Error('Missing VAPID_PUBLIC_KEY / VAPID_PRIVATE_KEY env vars');
  webpush.setVapidDetails(subject, pub, priv);
  vapidReady = true;
}

// ---- storage ---------------------------------------------------------------
export async function saveSubscription(userId, subscription) {
  await kv.set(subKey(userId), subscription);
  await kv.sadd(SUBS_SET, userId);
}
export async function getSubscription(userId) {
  return kv.get(subKey(userId));
}
export async function removeSubscription(userId) {
  await kv.del(subKey(userId));
  await kv.srem(SUBS_SET, userId);
}
export async function allUserIds() {
  return (await kv.smembers(SUBS_SET)) || [];
}

// ---- the message ------------------------------------------------------------
// Soft openers. Never a deadline, never a streak, never "you missed yesterday."
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
export function pickOpener() {
  return OPENERS[Math.floor(Math.random() * OPENERS.length)];
}
export function buildPayload(appUrl) {
  return JSON.stringify({
    title: 'Today',
    body: pickOpener(),
    url: appUrl || process.env.APP_URL || '/index.html'
  });
}

// ---- sending ----------------------------------------------------------------
// Sends to one subscription. Quietly forgets subscriptions the browser has
// dropped (404 / 410), so the list stays clean on its own.
export async function sendTo(userId, subscription, payload) {
  try {
    await webpush.sendNotification(subscription, payload);
    return { userId, ok: true };
  } catch (err) {
    const code = err && err.statusCode;
    if (code === 404 || code === 410) {
      await removeSubscription(userId);
      return { userId, ok: false, gone: true };
    }
    return { userId, ok: false, error: code || String(err) };
  }
}

// ---- CORS -------------------------------------------------------------------
// Lets the journal call the API whether it's served from the same origin
// (Vercel) or from GitHub Pages.
export function cors(req, res) {
  const origin = req.headers.origin || '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(204).end(); return true; }
  return false;
}

export async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  return await new Promise((resolve) => {
    let raw = '';
    req.on('data', (c) => { raw += c; });
    req.on('end', () => { try { resolve(JSON.parse(raw || '{}')); } catch { resolve({}); } });
    req.on('error', () => resolve({}));
  });
}

export function newUserId() {
  // url-safe random id, no dependency needed
  const bytes = (globalThis.crypto || require('node:crypto').webcrypto).getRandomValues(new Uint8Array(16));
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, '0')).join('');
}

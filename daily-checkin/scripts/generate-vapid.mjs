// Generate a VAPID key pair for web push.
//
//   npm install        (once, to get the web-push library)
//   node scripts/generate-vapid.mjs
//
// Then:
//   • paste the PUBLIC key into  config.js  (vapidPublicKey)
//   • add the PRIVATE key to Vercel as the env var  VAPID_PRIVATE_KEY
//   • add the PUBLIC key to Vercel as the env var   VAPID_PUBLIC_KEY
import webpush from 'web-push';

const { publicKey, privateKey } = webpush.generateVAPIDKeys();

console.log('\nVAPID keys generated.\n');
console.log('PUBLIC  (safe to expose — goes in config.js and Vercel env VAPID_PUBLIC_KEY):');
console.log(publicKey + '\n');
console.log('PRIVATE (keep secret — Vercel env VAPID_PRIVATE_KEY only):');
console.log(privateKey + '\n');
console.log('Also set VAPID_SUBJECT in Vercel, e.g.  mailto:amberbockel@gmail.com\n');

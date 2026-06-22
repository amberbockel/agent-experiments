// Today — front-end configuration.
//
// Two values, both safe to commit. Edit them after you deploy.
window.TODAY_CONFIG = {
  // Where the push API lives.
  //   ''  -> call the same origin you're served from (use this if you host this
  //          whole folder on Vercel — the simplest setup, no CORS).
  //   'https://your-project.vercel.app'  -> use this if you serve the journal
  //          from GitHub Pages but the API from Vercel.
  apiBase: '',

  // Your VAPID *public* key. Paste it here after running
  //   node scripts/generate-vapid.mjs
  // A public key is meant to be shared — it is safe in this file.
  // Leave it empty and the journal still works; the gentle-nudge feature
  // just stays switched off until you fill this in.
  vapidPublicKey: ''
};

// Today — front-end configuration.
//
// Two values, both safe to commit. Edit them after you deploy.
window.TODAY_CONFIG = {
  // How nudges are delivered:
  //   ''  -> "GitHub mode" (the default here). No server. A GitHub Actions
  //          workflow sends the daily push; when you turn nudges on, Settings
  //          shows a "nudge code" to paste into the PUSH_SUBSCRIPTION repo secret.
  //   'https://your-project.vercel.app'  -> "server mode". If you ever stand up
  //          the optional Vercel backend (see api/ and README), put its URL here
  //          and the app will register your device automatically.
  apiBase: '',

  // VAPID *public* key. Safe to expose — that's what a public key is for.
  // This matches the private key stored in the VAPID_PRIVATE_KEY repo secret.
  // (Regenerate anytime with: node scripts/generate-vapid.mjs)
  vapidPublicKey: 'BAKEaW6tJjmGeuuyy5mISgHXvaH1khDLWS-tv7IeBs4PS0PALxgyjrgFS3TWNQIJTY9cnCqliwBojvB5JDBsBJA'
};

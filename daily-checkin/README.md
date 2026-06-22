# Today

A quiet place to check in with yourself, one day at a time.

Each day there's a gentle prompt and a blank page. Write a lot, write a line,
or just open it and close it again. That's all this is. There are no streaks,
no counts, no "you missed yesterday." It will never make you feel behind.

Once a day, around **9:30am**, it can send one soft nudge to your phone — *"The
journal's here when you are."* You can turn that on or off whenever you like.

**Everything you write stays on your phone.** It is never uploaded, never synced,
never readable by anyone but you. The only thing the little server ever knows is
"send a nudge to this phone at 9:30am" — never a single word of what you wrote.

---

## Using it on your phone (one-time setup)

1. **Open the site in Chrome** on your Android phone (the link is at the bottom
   of this note once it's deployed).
2. **Write a few words.** After a moment, a small card slides up:
   *"Want a soft nudge at 9:30am?"* Tap **Yes** if you'd like the daily nudge,
   or **Not now** if you'd rather not. (If you tap Yes, Chrome will ask once more
   to confirm — tap **Allow**.)
3. **Add it to your home screen** when Chrome offers (a small *"Add"* banner
   appears). This isn't required, but it gives Today its own icon and opens it
   full-screen, without the browser bars. You can also use Chrome's
   ⋮ menu → *Add to Home screen* anytime.

That's the whole setup. There's nothing to sign into and no account to make.

---

## Make sure the nudge works (don't wait until tomorrow)

You don't have to wait until 9:30am to know it works:

1. Open Today and tap the **⚙ settings** icon (top right).
2. Make sure **"A soft nudge at 9:30am"** is switched on.
3. Tap **"Try it"** next to *Send a test nudge*.

A notification should arrive within a few seconds. Tapping it opens the journal.
If it arrives, the real 9:30am nudge will too.

---

## Turning nudges off (anytime)

Open **⚙ settings** and switch **"A soft nudge at 9:30am"** off. That's it —
nothing further will reach you, and you can switch it back on later with no fuss.

---

## If web push ever doesn't work — the simple fallback

Phones and browsers can be finicky about notifications, and that's okay. If the
nudge doesn't come through for any reason, you lose *nothing that matters*: the
journal itself works completely on its own, with or without notifications.

For a reliable nudge, set a **daily Google Calendar event** (or a **Google
Tasks** reminder) for **9:30am** with the text **"open Today if you want to."**
That reminder is only a nudge to open the app — the journal, your prompts, and
everything you've written work regardless. The notification was always just a
soft tap on the shoulder, never the point.

---
---

## For setup / deploying (the technical part — about 5 minutes)

The journal (the part you see) is plain static files. The nudge needs a tiny
backend for the 9:30am cron and to remember which phones to nudge. This project
is built to deploy as **one unit on Vercel** — the static journal *and* the API
together, same origin, no CORS to think about.

### What's in here

```
daily-checkin/
├── index.html          the journal (PWA)
├── manifest.json       installable-app metadata ("Today")
├── sw.js               service worker: shows the push, opens the app on tap
├── config.js           your VAPID public key + API location (safe to commit)
├── icons/              the typographic "t" app icon (192 / 512 / etc.)
├── api/
│   ├── subscribe.js    POST: store a phone's push subscription
│   ├── unsubscribe.js  POST: forget it
│   ├── test-push.js    POST: send a nudge right now (the "Try it" button)
│   ├── cron-daily.js   the 9:30am job
│   └── _lib/push.js    shared web-push + storage + the soft message wording
├── scripts/
│   ├── generate-vapid.mjs   makes your push keys
│   └── make_icons.py        regenerates the icons (needs Python + Pillow)
├── vercel.json         the two cron triggers
└── package.json
```

### One-time deploy

1. **Install + make your push keys**
   ```bash
   cd daily-checkin
   npm install
   node scripts/generate-vapid.mjs
   ```
   It prints a **PUBLIC** key and a **PRIVATE** key. Keep the terminal open.

2. **Put the public key in `config.js`**
   ```js
   vapidPublicKey: 'paste-the-PUBLIC-key-here'
   ```
   (Leave `apiBase: ''` — that means "use the same site," which is what you want
   when the journal and API live together on Vercel.)

3. **Deploy to Vercel**
   ```bash
   npm i -g vercel      # if you don't have it
   vercel                # link/create the project, accept the defaults
   vercel --prod         # publish
   ```

4. **Create a KV store and connect it**
   In the Vercel dashboard → your project → **Storage** → create a
   **KV** (Upstash) database and **Connect** it to the project. That auto-adds the
   `KV_REST_API_URL` / `KV_REST_API_TOKEN` env vars. This is where push
   subscriptions live (and *only* push subscriptions).

5. **Add the env vars** (Project → Settings → Environment Variables):
   | Name | Value |
   |---|---|
   | `VAPID_PUBLIC_KEY` | the PUBLIC key from step 1 |
   | `VAPID_PRIVATE_KEY` | the PRIVATE key from step 1 |
   | `VAPID_SUBJECT` | `mailto:amberbockel@gmail.com` |
   | `APP_URL` | your deployed URL, e.g. `https://daily-checkin.vercel.app/index.html` |
   | `CRON_SECRET` | any long random string (Vercel uses it to authorize the cron) |

6. **Redeploy** so the env vars take effect: `vercel --prod`.

7. **Open the deployed URL on your phone** and follow the *one-time setup* above,
   then tap **Try it** in settings to confirm the whole path works.

### The 9:30am cron + timezones

Vercel cron only runs in **UTC**, so `vercel.json` schedules the job **twice**
(13:30 and 14:30 UTC). The handler checks the local hour in your timezone and
only sends at 9:30am — so it stays correct through daylight-saving changes on its
own, and a once-a-day lock makes sure it only ever sends once.

- Default timezone is **America/New_York**. To use a different one, set a
  `TZ_NAME` env var (e.g. `America/Los_Angeles`) and adjust the two UTC times in
  `vercel.json` so one of them equals 9:30 local.

### Hosting the journal on GitHub Pages instead

Optional. If you'd rather serve the journal from GitHub Pages and keep only the
API on Vercel, set `apiBase` in `config.js` to your Vercel URL (e.g.
`https://daily-checkin.vercel.app`). The API already sends the right CORS headers
for that. Same origin on Vercel is simpler, though — recommended.

### Not included on purpose

No analytics, no tracking, no telemetry. No accounts, no login, no syncing across
devices. No streak counters or engagement metrics. One nudge, 9:30am, soft words.
That's the whole thing.

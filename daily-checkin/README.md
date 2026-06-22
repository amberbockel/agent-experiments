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

This deploys **entirely on the GitHub account this repo already lives in** — no
Vercel, no second service. The journal is served by **GitHub Pages**, and the
daily push is sent by a **scheduled GitHub Actions workflow**.

**Live journal:** https://amberbockel.github.io/agent-experiments/daily-checkin/

### What's in here

```
daily-checkin/
├── index.html          the journal (PWA)
├── manifest.json       installable-app metadata ("Today")
├── sw.js               service worker: shows the push, opens the app on tap
├── config.js           your VAPID public key (safe to commit)
├── icons/              the typographic "t" app icon (192 / 512 / etc.)
├── scripts/
│   ├── send-daily.mjs       the push sender (run by GitHub Actions)
│   ├── generate-vapid.mjs   regenerate push keys if you ever want to rotate
│   └── make_icons.py        regenerates the icons (needs Python + Pillow)
├── api/                optional Vercel backend (not used by the GitHub setup)
└── package.json

.github/workflows/daily-nudge.yml   the 9:30am job (and the manual test button)
```

### Turning the 9:30am nudge on (one-time, ~2 minutes)

The journal already works the moment it's on Pages. To switch on the daily push:

1. **Open the journal on your phone** and turn on **"A soft nudge at 9:30am"** in
   ⚙ settings, allowing notifications when asked.
2. Settings then shows a **nudge code**. Tap **Copy the code**.
3. In GitHub: **repo → Settings → Secrets and variables → Actions → New
   repository secret**, name it **`PUSH_SUBSCRIPTION`**, and paste the code.
4. Add one more secret, **`VAPID_PRIVATE_KEY`** — its value is given to you
   separately (it's the private half of the key already in `config.js`).
5. **Test it now:** repo → **Actions** tab → **Daily nudge** → **Run workflow**.
   A notification should arrive within a few seconds. After that it runs on its
   own every morning.

> Adding a second device? Turn nudges on there too, then make `PUSH_SUBSCRIPTION`
> a JSON array of both codes: `[ {…device one…}, {…device two…} ]`.

### The 9:30am schedule + timezones

GitHub Actions cron runs in **UTC only**, so the workflow fires **twice** (13:30
and 14:30 UTC). `send-daily.mjs` checks the local hour in your timezone and only
the run that equals 9:30am local actually sends — correct through daylight-saving
with no babysitting. (Actions cron can be a few minutes late under load; for a
soft morning nudge that's fine.)

- Default timezone is **America/New_York**. To change it, edit `TZ_NAME` in
  `.github/workflows/daily-nudge.yml` and adjust the two `cron:` times so one of
  them lands on 9:30am local.

### Optional: the Vercel backend instead

If you'd ever prefer a real subscribe endpoint and KV storage, the `api/` folder
and `vercel.json` are a complete Vercel app (subscribe / unsubscribe / test-push
+ cron). Deploy with `vercel --prod`, create + connect a KV store, set the
`VAPID_*` / `APP_URL` / `CRON_SECRET` env vars, then put your Vercel URL in
`config.js` as `apiBase`. The app switches to that automatically and the in-app
**"Try it"** button starts working. You don't need any of this for the GitHub
setup above.

### Not included on purpose

No analytics, no tracking, no telemetry. No accounts, no login, no syncing across
devices. No streak counters or engagement metrics. One nudge, 9:30am, soft words.
That's the whole thing.

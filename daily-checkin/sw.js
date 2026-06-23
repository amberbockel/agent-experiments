/* Today — service worker.
 *
 * Two jobs only:
 *   1. Show a notification when a push arrives.
 *   2. Open (or focus) the journal when that notification is tapped.
 *
 * There is a small offline cache so the journal opens even with no signal,
 * because the writing itself lives on the device and shouldn't depend on a network.
 */

const CACHE = 'today-v2';
const SHELL = [
  './',
  './index.html',
  './config.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network-first for navigations, cache fallback so the app always opens.
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('./index.html'))
    );
    return;
  }
  event.respondWith(
    caches.match(request).then((hit) => hit || fetch(request))
  );
});

// A push arrived. Show the soft nudge.
self.addEventListener('push', (event) => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (_) { data = {}; }

  const title = data.title || 'Today';
  const body = data.body || 'The journal’s here when you are.';
  const url = data.url || './index.html';

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon: 'icons/icon-192.png',
      badge: 'icons/icon-192.png',
      tag: 'today-daily',          // a new nudge replaces an unread one, never stacks
      renotify: false,
      requireInteraction: false,
      silent: false,
      data: { url }
    })
  );
});

// The nudge was tapped. Focus an open journal, or open one.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || './index.html';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      for (const client of clients) {
        if ('focus' in client) {
          client.navigate(target).catch(() => {});
          return client.focus();
        }
      }
      if (self.clients.openWindow) return self.clients.openWindow(target);
    })
  );
});

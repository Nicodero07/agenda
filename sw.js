// Fa funzionare l'app anche senza connessione (tranne le notizie).
const CACHE = 'agenda-v1';
const FILE = ['./', './index.html', './orario.json', './manifest.json', './apple-touch-icon.png', './icona-192.png', './icona-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILE)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))));
  self.clients.claim();
});

// Prima la rete (così un orario aggiornato arriva subito), se manca la rete usa la copia salvata.
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(r => { const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); return r; })
      .catch(() => caches.match(e.request))
  );
});

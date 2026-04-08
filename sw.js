const CACHE_NAME = 'holonotes-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/hologram_note.png',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Quicksand:wght@600;700&display=swap',
  'https://code.responsivevoice.org/responsivevoice.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Return cache hit
        }
        return fetch(event.request);
      })
  );
});

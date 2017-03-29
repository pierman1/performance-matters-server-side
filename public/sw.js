var cacheName = 'v3';
var cacheFiles = [
    '/offline/index.html',
    './css/main.css',
    'https://fonts.googleapis.com/css?family=Slabo+27px|Source+Sans+Pro',
    'https://fonts.googleapis.com/css?family=Inconsolata'
];

console.log('sw');

// install event
self.addEventListener('install', function (e) {
    console.log("[Service Worker] Installed")

    e.waitUntil(

        caches.open(cacheName).then(function (cache) {

            console.log("[ServiceWorker] Caching cache");
            return cache.addAll(cacheFiles);
        })

    )
})

// install event
self.addEventListener('activate', function (e) {
    console.log("[Service Worker] Installed")

    e.waitUntil(

        caches.keys().then(function (cacheNames) {
            return Promise.all(cacheNames.map(function(thisCacheName) {

                if (thisCacheName !== cacheName) {
                    console.log('[Service worker] Removing Cached Files from')
                    return caches.delete(thisCacheName);
                }

            }))
        })

    )
})

self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);


});


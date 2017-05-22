var cacheName = 'v4';
var cacheFiles = [
    '/offline/index.html',
    './css/main.css',
    './images/wifi.svg',
    './js/bundle.js',
    'https://fonts.googleapis.com/css?family=Slabo+27px|Source+Sans+Pro',
    'https://fonts.gstatic.com/s/inconsolata/v15/BjAYBlHtW3CJxDcjzrnZCIgp9Q8gbYrhqGlRav_IXfk.woff2',
    'https://fonts.googleapis.com/css?family=Inconsolata|Source+Sans+Pro'
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

self.addEventListener('fetch', function(event) {
    console.log('Handling fetch event for', event.request.url);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                console.log('Found response in cache:', response);

                return response;
            }
            console.log('No response found in cache. About to fetch from network...');

            return fetch(event.request).then(function(response) {
                console.log('Response from network is:', response);

                return response;
            }).catch(function(error) {
                console.error('Fetching failed:', error);

                throw error;
            });
        })
    );
});

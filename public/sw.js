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

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request)
            .then(function(response) {

            // If the request is in the cache
            if ( response ) {
                console.log("[ServiceWorker] Found in Cache", e.request.url, response);
                // Return the cached version
                return response;
            }

            // If the request is NOT in the cache, fetch and cache

            var requestClone = e.request.clone();
            fetch(requestClone)
                .then(function(response) {

                    if ( !response ) {
                        console.log("[ServiceWorker] No response from fetch ")
                        return response;
                    }

                    var responseClone = response.clone();

                    //  Open the cache
                    caches.open(cacheName).then(function(cache) {

                        // Put the fetched response in the cache
                        cache.put(e.request, responseClone);
                        console.log('[ServiceWorker] New Data Cached', e.request.url);

                        // Return the response
                        return response;

                    }); // end caches.open

                })
                .catch(function(err) {
                    console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
                });


            }) // end caches.match(e.request)
    ); // end e.respondWith
});


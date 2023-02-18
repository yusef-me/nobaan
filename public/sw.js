const CACHE_NAME = "cache-v1";
const STATIC_ASSETS = [
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/bundle.js',
    '/index.html',
    '/',
    '/users',
    '/register',
    '/favicon.ico',
    '/nobaan%20logo.png',
    '/static/js/vendors-node_modules_mui_icons-material_AddShoppingCart_js-node_modules_mui_icons-material_Sh-2bdf89.chunk.js',
    '/static/js/src_pages_Products_js.chunk.js',
    '/static/media/IRANSansWeb.ae01de6907048fbaba8b.ttf',
    '/static/media/IRANSansWeb_Bold.e65c9d525ca3a18949eb.ttf',
    '/logo192.png',
    '/nike.svg',
    '/adidas.svg',
    '/puma.svg',
    '/static/js/652.486956ce.chunk.js',
    '/styles.css',
    '/static/js/main.68469a8b.js',
    '/static/css/main.ba6a9162.css',
    '/static/css/450.d1ac086e.chunk.css',
    '/static/js/450.91530b38.chunk.js',
];

// setting the files in cache
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(STATIC_ASSETS)
            })
            .catch(err => console.log('cache error'))
    )
});

// fetch from catch
self.addEventListener("fetch", event => {
    if (!navigator.onLine) {
        event.respondWith(event.request).then(res => {
            if (res) {
                return res
            }
        })
    }
})
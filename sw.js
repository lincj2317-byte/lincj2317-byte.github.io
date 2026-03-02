self.addEventListener('install', (event) => {
  self.skipWaiting();
});


const CACHE_NAME = "llab-v10";
const urlsToCache = ["/","/index.html","/manifest.json"];

self.addEventListener("install",event=>{
event.waitUntil(
caches.open(CACHE_NAME).then(cache=>cache.addAll(urlsToCache))
);
});

self.addEventListener("fetch",event=>{
event.respondWith(
caches.match(event.request).then(response=>response || fetch(event.request))
);
});


self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

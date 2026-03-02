
const CACHE = "llab-v12";
self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["./?v=12"])))
  self.skipWaiting();
});
self.addEventListener("activate", e=>{
  e.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", e=>{
  e.respondWith(fetch(e.request).catch(()=>caches.match("./?v=12")));
});

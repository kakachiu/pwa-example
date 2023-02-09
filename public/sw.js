// self 指 service worker
// service worker 安裝事件
self.addEventListener("install", function (event) {
  console.log("[Service Worker] Installing Service Worker ...", event);
});

// service worker 安裝並啟動時
self.addEventListener("activate", function (event) {
  console.log("[Service Worker] Activating Service Worker ...", event);
  return self.clients.claim(); // 這行是為了確保 service worker 被正確載入和啟用，不加也可以
});

self.addEventListener("fetch", function (event) {
  console.log("[Service Worker] Fetching something ....", event);
  event.respondWith(fetch(event.request));
});

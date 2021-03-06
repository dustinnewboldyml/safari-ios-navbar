// v1

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("safari-bottom-navbar").then(function (cache) {
      return cache.addAll(["/", "/index.html"]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

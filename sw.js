self.addEventListener('install' , (event)=>{
  console.log("sw is installed")
  event.waitUntil(
  caches.open("static")
  .then((Cache)=>{
      Cache.addAll([
        "https://rahulnail.github.io/Burger/",
        "https://rahulnail.github.io/Burger/css/style.css",
        "https://rahulnail.github.io/Burger/index.html",
        "https://rahulnail.github.io/Burger/js/script.js",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css",
        "https://rahulnail.github.io/Burger/images/about-img.png",
        "https://rahulnail.github.io/Burgerimages/background.jpg",
        "https://rahulnail.github.io/Burger/images/blog-1.jpg",
        "https://rahulnail.github.io/Burger/images/blog-2.jpg",
        "https://rahulnail.github.io/Burger/images/blog-3.jpg",
        "https://rahulnail.github.io/Burger/images/burger_app_logo.png",
        "https://rahulnail.github.io/Burger/images/burger-banner.png",
        "https://rahulnail.github.io/Burger/images/home-bg.png",
        "https://rahulnail.github.io/Burger/images/logo.png",
        "https://rahulnail.github.io/Burger/images/pic-1.png",
        "https://rahulnail.github.io/Burger/images/pic-2.png",
        "https://rahulnail.github.io/Burger/images/pic-3.png",
        "https://rahulnail.github.io/Burger/images/product-1.png",
        "https://rahulnail.github.io/Burger/images/product-2.png",
        "https://rahulnail.github.io/Burger/images/product-3.png",
        "https://rahulnail.github.io/Burger/images/product-4.png",
        "https://rahulnail.github.io/Burger/images/product-5.png",
        "https://rahulnail.github.io/Burger/images/product-6.png",
        "https://rahulnail.github.io/Burger/images/sec_img.png",
        "https://rahulnail.github.io/Burger/images/title-img.png",

      ]).catch((error)=>{
          console.log(error)
      })
  })
  );
})

self.addEventListener('activate' , ()=>{
  console.log("sw is Activated")
})


self.addEventListener('fetch', (event) => {
event.respondWith(
  caches.match(event.request)
    .then((response) => {
      // The responce is in the cache
      if (response) {
        return response;
      }

      // No cache match, we attempt to fetch it from the network
      return fetch(event.request);
    }
  )
);
});


self.addEventListener('push', e=> {
console.log('push', e);
var body;

if (e.data) {
body = e.data.text();
} else {
body = 'Push message no payload';
}
var options = {
body: body,
icon: 'watch.jpg',
vibrate: [100, 50, 100],
data: {
dateOfArrival: Date.now(),
primaryKey: 1
},
actions: [
{action: 'explore', title: 'Explore this new world',
icon: 'shirt.jpg'},
{action: 'close', title: 'I don\'t want any of this',
icon: 'watch.jpg'},
]
};
e.waitUntil(
self.registration.showNotification('Push Notification', options)
);
});

self.addEventListener('sync', function(event) {
console.log("sync event", event);
});
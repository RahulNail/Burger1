let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');

if("serviceWorker" in navigator){
   navigator.serviceWorker.register("https://rahulnail.github.io/Burger1/sw.js")
   .then(()=>{
      console.log("sw registered")
   })
}
Notification.requestPermission(function(status) {
console.log('Notification permission status:', status);
});

searchBtn.onclick = () =>{
   searchBtn.classList.toggle('fa-times');
   searchForm.classList.toggle('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
}

window.onscroll = () =>{
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}

var swiper =  new Swiper(".footerSwiper", {
  autoplay: {
    delay: 0, 
    disableOnInteraction: false,
  },
  speed: 8000,
  loop: true,
  loopAdditionalSlides: 3,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

//map
let HOME_PATH = window.HOME_PATH || '.';
let position = new naver.maps.LatLng(37.65691, 127.0664);

let map = new naver.maps.Map('map', {
    center: position,
    zoom: 17
});

let markerOptions = {
  position: position,
  map: map,
  icon: {
      url: './images/10.footer/footer-icon-map-pointer.svg',
      size: new naver.maps.Size(102, 41),
      origin: new naver.maps.Point(0, 0),
      anchor: new naver.maps.Point(11, 35)
  }
};

let marker = new naver.maps.Marker(markerOptions);

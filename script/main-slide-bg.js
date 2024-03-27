/* 헤더 */
let Header = document.querySelector(".header");
// 스크롤 이벤트
function scrollAction() {
  Top = window.scrollY || document.documentElement.scrollTop;
  if (Top === 0) {
    Header.classList.remove("move");
  } else {
    Header.classList.add("move");
  }

}

window.addEventListener("scroll", scrollAction);
// 서브메뉴 이벤트
let subMenu = document.querySelector(".sub-menu");
let menuTab = document.querySelector(".gnb li:nth-child(2)");
// 나타나기
menuTab.addEventListener("mouseover", function () {
  subMenu.style.height = '170px';
});
menuTab.addEventListener("mouseleave", function () {
  subMenu.style.height = "0px";
});
// 검색창 이벤트
let searchBtn = document.querySelector(".search");
let searchWrap = document.querySelector(".main-search");
let searchCloseBtn = document.querySelector(".main-search-btn");
let headerItem = document.querySelector(".header-item");

let interval = 10;
//검색창 서서히 열리기
searchBtn.addEventListener("click", function () {
  searchWrap.style.display = "flex";
  searchWrap.style.opacity = "0";
  headerItem.style.zIndex = "20";
  fadeIn(searchWrap, 200);
});
searchCloseBtn.addEventListener("click", function () {
  fadeOut(searchWrap, 200);
  headerItem.style.zIndex = "-1";
});

function fadeIn(element, duration) {
  let opacity = 0;
  let gap = interval / duration;
  function fadeInInterval() {
    opacity += gap;
    element.style.opacity = String(opacity);
    if (opacity >= 1) {
      clearInterval(fading);
    }
  }
  let fading = setInterval(fadeInInterval, interval);
}
function fadeOut(element, duration) {
  let opacity = 1;
  let gap = interval / duration;
  function fadeOutInterval() {
    opacity -= gap;
    element.style.opacity = String(opacity);
    if (opacity <= 0) {
      element.style.display = "none";
      clearInterval(fading);
    }
  }
  let fading = setInterval(fadeOutInterval, interval);
}

/* 사이트맵 */
let trigger = document.querySelector('.trigger');
let siteMap = document.querySelector('.site-map');
let siteMapGnb = document.querySelector(".chose");
let siteMapSubMenu = document.querySelector(".site-map-gnb  .sub-menu");

trigger.addEventListener('click',function(){
  siteMap.classList.toggle('on');
  trigger.classList.toggle('on');
})


siteMapGnb.addEventListener("click", function () {
  this.classList.toggle("active");
  siteMapSubMenu.classList.toggle("active");
});



/* 메인 비주얼 슬라이드 */
var swiper = new Swiper(".mainSwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  allowTouchMove: true,
  breakpoints: {
    1024: {
      allowTouchMove: false,
    }
  }
});


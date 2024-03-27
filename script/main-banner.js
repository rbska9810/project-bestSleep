window.addEventListener('scroll', function(){
  const mainBanner = document.getElementsByClassName('main-banner')[0];
  const mainTitle = document.querySelector('.main-wrap h2');
  const mainBannerTop = window.scrollY + mainBanner.getBoundingClientRect().top;
  const mainBannerScrollFix = mainBannerTop - 600; // 스크롤 이벤트 고정값
  const docElem = document.documentElement;
  const scrollAmount = docElem.scrollTop;

  if (scrollAmount > mainBannerScrollFix) {
    mainTitle.classList.add('fill');
  } else {
    mainTitle.classList.remove('fill'); 
  }
});


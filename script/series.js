/* series */


/* series 모바일용 슬라이드 */
var swiper = new Swiper(".series-items", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 5,
  breakpoints:{
    1400: {
      slidesPerView: 5,
    },
  },
});

/* series 호버시 너비 넓어짐 */


function seriesPlus(){
  let seriesSlide = document.querySelectorAll('.series .swiper-slide');
  let seriesSlideWrap = document.querySelector('.series .swiper-wrapper');
  let series = document.querySelector('.series');
  let seriesSlideWrapWidth = seriesSlideWrap.offsetWidth - 20;
  let bodyWidth = document.documentElement.offsetWidth;
  if (bodyWidth > 1400) {
    for (let i = 0; i < seriesSlide.length; i++) {
      seriesSlide[i].addEventListener('click', function (e) {
        for (let j = 0; j < seriesSlide.length; j++) {
          seriesSlide[j].style.width = (seriesSlideWrapWidth - 1200) / 4 + 'px';
          seriesSlide[j].classList.add('on','overtext');
          seriesSlide[j].classList.remove('contentView');
          
        }
        seriesSlide[i].style.width = '1200px';
        seriesSlide[i].classList.remove('overtext');
        seriesSlide[i].classList.add('contentView');
      })
    }
    series.addEventListener('click',function(e){
      if(series == e.target){
        for (let i = 0; i < seriesSlide.length; i++){
          seriesSlide[i].style.width = seriesSlideWrapWidth / 5 + 'px';
          seriesSlide[i].classList.remove('on', 'overtext', 'contentView');
        }
      }
    })
  }
}
window.addEventListener('load',seriesPlus);
window.addEventListener('resize',seriesPlus);
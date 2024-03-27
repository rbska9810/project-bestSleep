/* 변수 지정 */

/* 베너 */
let mainBannerText = document.querySelector('.main-banner p');
let mainBannerTop = document.querySelector('.main-banner').offsetTop - 350;
/* 비디오 슬라이드 */
let videoSlide = document.querySelector('.video-slide');
let videoTop = videoSlide.offsetTop -600;
/* 매트리스 마스터 */
let mattressMaster = document.querySelector('.mattress-master');
let masterTop = mattressMaster.offsetTop -500;
/* 시리즈 */
let seriesParent = document.querySelector('.series');
let seriesTop = seriesParent.offsetTop -200;
/* 리뷰 */
let review = document.querySelector('.review');
let reviewTop = review.offsetTop - 500;
/* 베스트 */
let best = document.querySelector('.best');
let bestTop = best.offsetTop -300;
/* 쇼룸 */
let showroom = document.querySelector('.showroom');
let showroomTop = showroom.offsetTop -1000;
/* commend */
let commend = document.querySelector('.commend');
let commendTop = commend.offsetTop - 800;







/* 스크롤 시 클래스값 넣어주는 함수 */
function fade(top, fade) {
  let mobile = window.matchMedia("screen and (max-width: 1024px)");
  if (mobile.matches) {
    fade.classList.add('fade');
  } else {
    if (this.window.scrollY >= top) {
      fade.classList.add('fade');
    }
  }
}
/* 스크롤 이벤트 */
window.addEventListener('scroll', function(){
  fade(mainBannerTop, mainBannerText);
  fade(videoTop, videoSlide);
  fade(masterTop, mattressMaster);
  fade(seriesTop, seriesParent);
  fade(reviewTop, review);
  fade(bestTop, best);
  fade(showroomTop, showroom);
  fade(commendTop, commend);
})
window.addEventListener('load',function(){
  fade(mainBannerTop, mainBannerText);
  fade(videoTop, videoSlide);
  fade(masterTop, mattressMaster);
  fade(seriesTop, seriesParent);
  fade(reviewTop, review);
  fade(bestTop, best);
  fade(showroomTop, showroom);
  fade(commendTop, commend);
})
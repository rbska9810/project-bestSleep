// 배경 라인 스크롤 이벤트
window.addEventListener('scroll', function(){
  const videoLine = document.getElementsByClassName('video-wrap-line')[0];
  const videoSlide = document.getElementsByClassName('video-slide')[0];
  const videoSlideTop = window.scrollY + videoSlide.getBoundingClientRect().top;
  const videoSlideScrollFix = videoSlideTop - 100;
  const docElem = document.documentElement;
  const scrollAmount = docElem.scrollTop;

  if (scrollAmount > videoSlideScrollFix) {
    videoLine.classList.add('move');
  } else {
    videoLine.classList.remove('move');
  }
});

//반응형 추가 -규남

let mobileList = document.querySelector('.video-slide-list');
  if (this.document.documentElement.offsetWidth <= '1024') {
    mobileList.innerHTML =
      `
      <li class="clickList"><span></span></li>
      <li><span></span></li>
      <li><span></span></li>
      <li><span></span></li>
      `
  } else {
    mobileList.innerHTML =
      `
      <li class="clickList">SPRING</li>
      <li>COMFORT</li>
      <li>MANUFACTURING</li>
      <li>MATERIAL</li>
      `;
  }
window.addEventListener('resize',function(){
  if (this.document.documentElement.offsetWidth <= '1024') {
    mobileList.innerHTML =
      `
      <li><span></span></li>
      <li><span></span></li>
      <li><span></span></li>
      <li><span></span></li>
      `
  } else {
    mobileList.innerHTML =
      `
      <li>SPRING</li>
      <li>COMFORT</li>
      <li>MANUFACTURING</li>
      <li>MATERIAL</li>
      `;
  }
  //contents 슬라이드 효과
  videoBtnClick();
})
//contents 슬라이드 효과
let desc = document.querySelectorAll('.video-slide-desc');
desc[0].classList.add('viewDesc');
function videoBtnClick(){
  let videoTitleList = document.querySelectorAll('.video-slide-list li');
let videos = document.querySelector('.videos');
let images = document.querySelectorAll('.videos img');
let desc = document.querySelectorAll('.video-slide-desc');
let currentPosition = 0;

for (let i = 0; i < videoTitleList.length; i++) {
  videoTitleList[i].addEventListener('click', function () {
    //left list
    for (let j = 0; j < videoTitleList.length; j++) {
      if (j !== i) {
        videoTitleList[j].classList.remove('clickList');
      }
    }
    this.classList.add('clickList');

    // middle slide
    const imageWidth = images[i].clientWidth;
    const targetPosition = -i * imageWidth;
    smoothScroll(currentPosition, targetPosition, 500, (position) => {
      videos.style.marginLeft = `${position}px`;
      //템플릿리터널 ES6
    });
    currentPosition = targetPosition;

    //right desc
    for(let k=0; k<desc.length; k++){
      if(i===k){
        desc[k].classList.add('viewDesc');
        desc[k].classList.add('animationDesc');
      }else{
        desc[k].classList.remove('viewDesc');
        desc[k].classList.remove('animationDesc');
      }
    }
  });
}
}
videoBtnClick();

// middle slide 부드러운 스크롤 효과를 위한 함수
function smoothScroll(start, end, duration, callback) {
  const startTime = performance.now();
  function updateScroll() {
    const currentTime = performance.now();
    const progress = (currentTime - startTime) / duration;
  
    if (progress < 1) {
      const newPosition = start + (end - start) * progress;
      callback(newPosition);
      requestAnimationFrame(updateScroll);
    } else {
      callback(end);
    }
  }


  requestAnimationFrame(updateScroll);
}



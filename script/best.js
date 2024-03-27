let bestTab = document.querySelectorAll(".best-tab-menu li a");
let bestWrap = document.querySelectorAll(".best-item-wrap");
let bestItem = document.querySelectorAll(".best-mini-img div a");

// 베스트탭 이벤트
function showBestTab(num) {
  bestWrap.forEach(function (item) {
    item.style.display = "none";
  });
  bestWrap[num].style.display = "flex";
}
function selectTab(num) {
  bestTab.forEach(function (item) {
    item.classList.remove("select");
  });
  bestTab[num].classList.add("select");
}
selectTab(0);
showBestTab(0);
bestTab.forEach(function (item, idx) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    showBestTab(idx);
    selectTab(idx);
  });
});

// 베스트아이템 클래스 추가
/* for (let i = 0; i < bestItem.length; i++) {
  bestItem[i].addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < bestItem.length; j++) {
      e.target.classList.add("active");
      bestItem[j].classList.remove("active");
    }
  });
} */

function activeTab(num) {
  bestItem.forEach(function (item) {
    item.classList.remove("active");
  });
  bestItem[num].classList.add("active");
}
bestItem[0].classList.add("active");
bestItem[3].classList.add("active");

bestItem.forEach(function (item, idx) {
  item.addEventListener("click", function () {
    activeTab(idx);
  });
});

// 베스트아이템 이벤트
let mattressImg = document.querySelector(".mattress .best-left-img img");
(mattressH5 = document.querySelector(".mattress .best-title h5")),
  (mattressH3 = document.querySelector(".mattress .best-title h3")),
  (mattressA1 = document.querySelector(
    ".mattress .best-textBox .hashtag a:nth-child(1)"
  )),
  (mattressA2 = document.querySelector(
    ".mattress .best-textBox .hashtag a:nth-child(2)"
  )),
  (mattressP1 = document.querySelector(
    ".mattress .best-wrap-contents p:nth-child(1)"
  )),
  (mattressP2 = document.querySelector(
    ".mattress .best-wrap-contents p:nth-child(2)"
  )),
  (mattressSpan = document.querySelector(".mattress .best-wrap-contents span"));

let frameImg = document.querySelector(".frame .best-left-img img");
(frameH5 = document.querySelector(".frame .best-title h5")),
  (frameH3 = document.querySelector(".frame .best-title h3")),
  (frameA1 = document.querySelector(
    ".frame .best-textBox .hashtag a:nth-child(1)"
  )),
  (frameA2 = document.querySelector(
    ".frame .best-textBox .hashtag a:nth-child(2)"
  )),
  (frameP1 = document.querySelector(
    ".frame .best-wrap-contents p:nth-child(1)"
  )),
  (frameP2 = document.querySelector(
    ".frame .best-wrap-contents p:nth-child(2)"
  )),
  (frameSpan = document.querySelector(".frame .best-wrap-contents span"));

// 이미지 src 변경
function mattressImgSrc(src) {
  mattressImg.setAttribute("src", src);
}
function frameImgSrc(src) {
  frameImg.setAttribute("src", src);
}

// Z8B 이벤트
document.getElementById("Z8B").addEventListener("click", function () {
  mattressImgSrc("images/07.best/best07.png");
  mattressH5.innerText = "Number.01";
  mattressH3.innerText = "Best Sleep Z8B";
  mattressA1.innerText = "#혼수침대";
  mattressA2.innerText = "#Z8BLACK";
  mattressP1.innerText = "베스트슬립 판매량 1위 프리미엄 매트리스 Z8BLACK";
  mattressP2.innerText =
    "3,325개의 셀코일이 하중을 고르게 분산시켜주는 매트리스(Q사이즈 기준)";
  mattressSpan.innerText =
    "· 추천고객 : 혼수를 준비하는 신혼 부부, 몸에 지지력이 필요한 고객";
});
// Z10 이벤트
document.getElementById("Z10").addEventListener("click", function () {
  mattressImgSrc("images/07.best/best08.png");
  mattressH5.innerText = "Number.02";
  mattressH3.innerText = "Best Sleep Z10";
  mattressA1.innerText = "#안정적";
  mattressA2.innerText = "#hyper cell coil";
  mattressP1.innerText =
    "베스트슬립 브랜드필름에서 자신 있게 선보인 프리미엄 매트리스 Z10";
  mattressP2.innerText =
    "10회전 스프링 '하이퍼 셀코일'로 차원이 다른 안정감과 편안함을 제공";
  mattressSpan.innerText =
    "· 추천고객 : 호텔 침대의 안락함을 원하는 부부, 안정적인 느낌을 선호하는 고객";
});
// Z10B 이벤트
document.getElementById("Z10B").addEventListener("click", function () {
  mattressImgSrc("images/07.best/best09.png");
  mattressH5.innerText = "Number.03";
  mattressH3.innerText = "Best Sleep Z10B";
  mattressA1.innerText = "#신혼부부";
  mattressA2.innerText = "#5star hotel";
  mattressP1.innerText =
    "신혼부부에게 가장 사랑 받는 베스트슬립 시그니처 모델 Z10BLACK ";
  mattressP2.innerText =
    "세계 최고 수준, 5,172개의 셀코일이 탑재된 고품격 프리미엄 매트리스(Q사이즈 기준)";
  mattressSpan.innerText =
    "· 추천고객 : 항상 최고의 숙면을 꿈꾸는 고객, 최상의 품질을 원하는 고객";
});
// Carolyn 이벤트
document.getElementById("Carolyn").addEventListener("click", function () {
  frameImgSrc("images/07.best/best10.png");
  frameH5.innerText = "Number.04";
  frameH3.innerText = "Best Sleep Carolyn";
  frameA1.innerText = "#수납형";
  frameA2.innerText = "#trendy";
  frameP1.innerText = "패브릭과 우드가 어우러진 세련된 디자인";
  frameP2.innerText = "트렌디한 감성이 돋보이는 수납형 프레임, 캐롤린";
  frameSpan.innerText =
    "· 추천고객 : 패브릭 재질을 선호하는 고객, 호텔 침대의 와이드한 헤드를 원하는 고객";
});
document.getElementById("Heidi").addEventListener("click", function () {
  frameImgSrc("images/07.best/best11.png");
  frameH5.innerText = "Number.05";
  frameH3.innerText = "Best Sleep Heidi";
  frameA1.innerText = "#커브형";
  frameA2.innerText = "#Luxurious";
  frameP1.innerText = "유려한 곡선을 살린 고급스러운 디자인";
  frameP2.innerText =
    "아늑하고 멋스러운 공간을 연출해주는 커브형 패브릭 프레임, 하이디";
  frameSpan.innerText =
    "· 추천고객 : 패브릭 프레임을 찾는 고객, 안정감을 더한 낮은 높이를 찾는 고객";
});
document.getElementById("Brandon").addEventListener("click", function () {
  frameImgSrc("images/07.best/best12.png");
  frameH5.innerText = "Number.06";
  frameH3.innerText = "Best Sleep Brandon";
  frameA1.innerText = "#천연원목";
  frameA2.innerText = "#elegance";
  frameP1.innerText = "천연 원목의 우아함을 그대로 살린 디자인";
  frameP2.innerText = "침실을 아늑하게 만드는 은은한 스타일의 프레임, 브랜든";
  frameSpan.innerText =
    "· 추천고객 : 견고하고 안정적인 프레임, 심플하고 모던한 디자인을 선호하는 고객";
});

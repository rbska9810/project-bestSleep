//shop-left nav클릭시 서브메뉴 나타남
let shopLeftList = document.querySelectorAll('.shop-nav>.nav-click');
let shopLeftLiTitle = document.querySelectorAll('.shop-nav>.nav-click>a');

for (let i = 0; i < shopLeftLiTitle.length; i++) {
  shopLeftLiTitle[i].addEventListener('click', function (e) {
    e.preventDefault();
    shopLeftList[i].classList.toggle('on');

  })
}


/* shopItem 배열 */
let shopItems = {
  img: [
    "../images/12.sub-page01/image01.png",
    "../images/12.sub-page01/image02.png",
    "../images/12.sub-page01/image03.png",
    "../images/12.sub-page01/image04.png",
    "../images/12.sub-page01/image05.png",
    "../images/12.sub-page01/image06.png",
    "../images/12.sub-page01/image07.png",
    "../images/12.sub-page01/image08.png",
    "../images/12.sub-page01/image09.png",
    "../images/12.sub-page01/image10.png",
    "../images/12.sub-page01/image11.png",
    "../images/12.sub-page01/image12.png",
    "../images/12.sub-page01/image13.png",
    "../images/12.sub-page01/image14.png",
    "../images/12.sub-page01/image15.png",
    "../images/12.sub-page01/image16.png",
    "../images/12.sub-page01/image17.png",
    "../images/12.sub-page01/image18.png"
  ],
  title: [
    "CAROLYN",
    "HEIDI",
    "Saint Cream Beige",
    "Pebbly Beige",
    "Eva Light Gray",
    "Kelly",
    "Elise",
    "Hamilton Navy",
    "Ariana Beige",
    "Sharon Light Brown",
    "Lexington Ivory",
    "Chapman Gray",
    "Hennagun",
    "Estefan Walnut",
    "Terry",
    "Dustin Merbaugh",
    "Gloria",
    "Campbell"
  ],
  subtitle: [
    "캐롤린 아이보리 주문제작 핸드메이드 프레임",
    "하이디 크림베이지 실키 패브릭 주문제작 핸드메이드 프레임",
    "세인트 크림 베이지 패브릭 주문제작 핸드메이드 프레임",
    "페블리 베이지 실키 패브릭 주문제작 핸드메이드 프레임",
    "에바 라이트그레이 실키 패브릭 주문제작 핸드메이드 프레임",
    "켈리 라이트브라운 원목 주문제작 핸드메이드 프레임",
    "엘리제 그레이 주문제작 핸드메이드 프레임",
    "해밀튼 네이비 실키 패브릭 주문제작 핸드메이드 프레임",
    "아리아나 베이지 실키 패브릭 주문제작 핸드메이드 프레임",
    "샤론 라이트브라운 패브릭 주문제작 핸드메이드 프레임",
    "렉싱턴 아이보리 패브릭 주문제작 핸드메이드 프레임",
    "채프먼 그레이 패브릭 주문제작 핸드메이드 프레임",
    "헤너건 다크브라운 주문제작 핸드메이드 프레임",
    "에스테판 월넛 주문제작 핸드메이드 프레임",
    "테리 메이플 원목수납 주문제작 핸드메이드 프레임",
    "더스틴 멀바우 주문제작 핸드메이드 프레임",
    "글로리아 멀바우 주문제작 핸드메이드 프레임",
    "캠벨 다크브라운 주문제작 핸드메이드 프레임"
  ],
  itemColor: [
    ["#EDD1BE", "#D38B7C", "#543428"],
    ["#F5E3DF", "#706A75", "#3C4154"],
    ["#BEB9B5"],
    ["#E8D5BE"],
    ["#C0BBC1"],
    ["#D39763", "#6A4332"],
    ["#A09F9B", "#E9D7C9"],
    ["#3C4154"],
    ["#CEBABA"],
    ["#AFA09D"],
    ["#C9C3C7"],
    ["#BEB9B5"],
    ["#664637", "#6E381A", "#C4A68C", "#706464", "#BCB2B1"],
    ["#4F3326"],
    ["#E0AC77", "#9B6647"],
    ["#A66547"],
    ["#6E3E31", "#D6B79D"],
    ["#A06849", "#6A4A3A", "#AC8465", "#BDA692"],
  ],
  price: [
    900000,
    1030000,
    730000,
    920000,
    550000,
    690000,
    890000,
    870000,
    870000,
    670000,
    850000,
    690000,
    880000,
    770000,
    910000,
    600000,
    870000,
    720000,
  ]
};

/* 배열로 각 아이템들 생성 */
let shopWrap = document.querySelector('.shop-items');
let itemColor = document.querySelectorAll('.item-color');

function shopContents(start, end) {
  for (let i = start; i < end; i++) {
    let shopItem =
      `
        <div class="shop-item">
          <span class="heart-icon"></span>
          <img src="${shopItems.img[i]}" alt="image">
          <h5>
            <span class='title-left'>${shopItems.title[i]}</span>
            <span class='title-right'>${shopItems.subtitle[i]}</span>
          </h5>
          <div class="item-color">
            ${colorItems(i)}
          </div>
          <p class="price">
            <span>${shopItems.price[i].toLocaleString(undefined, {minimumFractionDigits: 0,})}</span>
            <span>${(shopItems.price[i] * 2).toLocaleString(undefined, {minimumFractionDigits: 0,})}</span>
            <span>50%</span>
          </p>
        </div>
`;
    shopWrap.innerHTML += shopItem;
  }
}

function colorItems(i) {
    return `<span style='background-color:${shopItems.itemColor[i][0]}'></span>
    <span style='background-color:${shopItems.itemColor[i][1]}'></span>
    <span style='background-color:${shopItems.itemColor[i][2]}'></span>
    <span style='background-color:${shopItems.itemColor[i][3]}'></span>
    <span style='background-color:${shopItems.itemColor[i][4]}'></span>
    `;
}
/* 상품 나타남 */
shopContents(0,6);
//더보기 버튼 클릭시 3개씩 늘어남
let moreBtn = document.querySelector('.shop-content .more-btn');
let btnClick = 0;
moreBtn.addEventListener('click',function(){
  btnClick++
  let start = btnClick*3+3;
  let end = start+3;
  shopContents(start, end);
  if(btnClick == 4){
    moreBtn.style.display = 'none';
  }
  wishListPlus();
  /* 더보기버튼 클릭시 mian-shop의 높이가 늘어남 */
  let shopItemHeight = document.querySelectorAll('.shop-item')[0].offsetHeight;
  let mainShop = document.querySelector('.main-shop');
  let mainShopHeight = mainShop.offsetHeight + 100;
  if(document.documentElement.offsetWidth > 1024){
    mainShop.style.height = mainShopHeight + shopItemHeight+'px';
  }
  console.log(shopItemHeight);
})


/* 위시리스트 스와이퍼 */
var swiper = new Swiper(".shop-modal-left", {
  spaceBetween: 50,
  breakpoints: {
    1024: {
      slidesPerView : 4.5,
    },
    568 : {
      slidesPerView : 2.5,
    },
  },
  slidesPerView : 1.5,
});




/* 위시리스트 열기, 닫기 */
let wishList = document.querySelector('.wishlist');
let shopModalBg = document.querySelector('.shop-modal-bg');
let shopModalClose = document.querySelector('.shop-modal .close-icon');
let quickMenu = document.querySelector('.quickmenu');
wishList.addEventListener('click',function(){
  shopModalBg.style.display = 'block';
  quickMenu.style.display = 'none';
});
shopModalClose.addEventListener('click',function(){
  shopModalBg.style.display = 'none';
  quickMenu.style.display = 'flex';
})
/* 위시리스트 담기 */

function wishListPlus(){
  let heartIcon = document.querySelectorAll('.shop-item .heart-icon');
  for(let i = 0; i<heartIcon.length;i++){
    heartIcon[i].addEventListener('click',function(){
      /* 하트아이콘 누르면 색 바뀜 */
      heartIcon[i].classList.add('on');
      //하트아이콘 누르면 그 하트아이콘 순번째와 같은 순번을 가지고있는 배열의 순번을 가져와 대입.
      let wishListSlideWrap = document.querySelector('.shop-modal-left .swiper-wrapper');
      wishListSlideWrap.innerHTML +=
      `
      <div class="swiper-slide">
        <div class="heart-icon on"></div>
        <img src="${shopItems.img[i]}" alt="image">
        <h4>${shopItems.title[i]}</h4>
      </div>
      `;
    })
  }
}
wishListPlus();

/* 반응형 구간 shop-trigger 누르면 nav 나오게 하기 */
let shopTrigger = document.querySelector('.shop-trigger');
let shopNav = document.querySelector('.shop-nav');
shopTrigger.addEventListener('click',function(e){
  e.preventDefault();
  shopTrigger.classList.toggle('on');
  shopNav.classList.toggle('on');
})

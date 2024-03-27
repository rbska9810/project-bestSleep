/* showroom */

/* showroom 하트아이콘 클릭시 이미지 변경 */
let heartIcon = document.querySelectorAll('.showroom .heart-icon');

for (let i = 0; i < heartIcon.length; i++) {
  heartIcon[i].addEventListener('click', function () {
    heartIcon[i].classList.toggle('on');
  })
}

/* showroom list 클릭시 왼쪽 이미지 변경 */
let showroomLeftImg = document.querySelector('.showroom-content-left');
let showroomList = document.querySelectorAll('.showroom-list li a');


for (let i = 0; i < showroomList.length; i++) {
  let showroomImg = showroomList[i].getAttribute('data-showroomImg');
  showroomList[i].addEventListener('click', function (e) {
    e.preventDefault();
    showroomLeftImg.style.backgroundImage = `url(${showroomImg})`;
  })
}
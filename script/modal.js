//modal
function Modal() {
  const modal= document.getElementsByClassName('modal')[0];
  const tabMenu = document.querySelectorAll('.tab-contents>div');
  const tabMenuLink = document.querySelectorAll('.event-product>a');
  const eventTitle1 = document.getElementsByClassName('tabmenu1-btn1')[0];
  const eventTitle2 = document.getElementsByClassName('tabmenu1-btn2')[0];
  const mainEvent = document.getElementById('tabmenu1');
  const modalCloseBtn = document.getElementsByClassName('modal-close-btn')[0];

  tabMenu.forEach(function (div) {
    div.style.display = 'none';
  });
  mainEvent.style.display = 'block';

  //탭 기능
  tabMenuLink.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const tab = this.getAttribute('href')
      tabMenu.forEach(function (div) {
        div.style.display = 'none';
        eventTitle1.style.display = 'none';
        e.preventDefault();
      });
      document.querySelector(tab).style.display = 'block';
      tabMenuLink.forEach(function (link) {
        link.classList.remove('tabClick');
      });
      this.classList.add('tabClick');
    });
  });

  //첫화면으로 돌아오기
  eventTitle2.addEventListener('click', function (){
    mainEvent.style.display = 'block';
    eventTitle1.style.display = 'block';
    tabMenuLink.forEach(function (link) {
      link.classList.remove('tabClick');
    });
  });
  
  //닫기 버튼
  modalCloseBtn.addEventListener('click', function (){
    modal.style.display = 'none';
  });
}

Modal();




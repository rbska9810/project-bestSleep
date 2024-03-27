document.addEventListener('DOMContentLoaded', function(){
  const windowSection = window;
  const quickMenu = document.getElementsByClassName('quickmenu')[0];

  window.addEventListener('scroll',function(){
  if(windowSection.scrollY > 50){
    quickMenu.classList.add('scroll')
  }else{
    quickMenu.classList.remove('scroll')
  }
  });
});
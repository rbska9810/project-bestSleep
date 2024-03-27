function setupModal() {
  const mattressBtns = document.getElementsByClassName('mattress-btn');
  const mattressImgBtns = document.getElementsByClassName('master-btn-img-box');
  const modalCards = document.getElementsByClassName('modal-card');
  const modal = document.getElementsByClassName('master-modal')[0];
  const modalCloseBtns = document.getElementsByClassName('close-btn');

  for (let i = 0; i < mattressBtns.length; i++) {
    mattressBtns[i].addEventListener('click', function () {
      toggleModal(i);
    });
  }

  for (let i = 0; i < mattressImgBtns.length; i++) {
    mattressImgBtns[i].addEventListener('click', function () {
      toggleModal(i);
    });
  }

  for (let i = 0; i < modalCloseBtns.length; i++) {
    modalCloseBtns[i].addEventListener('click', function () {
      closeModal(i);
    });
  }

  //함수
  function toggleModal(index) {
    for (let j = 0; j < modalCards.length; j++) {
      if (j !== index) {
        modalCards[j].classList.remove('card-veiw');
      }
    }
    modalCards[index].classList.add('card-veiw');
    modal.classList.add('modal-vew');
  }

  function closeModal(index) {
    modal.classList.remove('modal-vew');
    modalCards[index].classList.remove('card-veiw');
  }
  modal.addEventListener('click', function(e){
    if(e.target == modal){
      modal.classList.remove('modal-vew');
      for(let i = 0; i < modalCards.length; i++){
        modalCards[i].classList.remove('card-veiw');
      }
    }
  })
}

setupModal();



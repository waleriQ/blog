/* querySelectorAll - Выбираем все кнопки с данным классом */
const modalBtn = document.querySelectorAll('[data-modal]');
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');
const body = document.body; 

modalBtn.forEach(item => {
item.addEventListener('click', event => {
  let $this = event.currentTarget;
  let ModalId = $this.getAttribute('data-modal');
  let modal = document.getElementById(ModalId);
  let modalContent = modal.querySelector('.modal__content');
  modalContent.addEventListener('click',  event => {
    event.stopPropagation();
  })

  modal.classList.add('show');
  body.classList.add('no-scroll'); //delete scroll
}); 
});

modalClose.forEach(item => {
  item.addEventListener('click', event => {
  let currentModal = event.target.closest('.modal');
  currentModal.classList.remove('show');
  body.classList.remove('no-scroll');
  });
  });
  
  modal.forEach(item => {
    item.addEventListener('click', event => {
    let currentModal = event.target.closest('.modal');
    currentModal.classList.remove('show');
    body.classList.remove('no-scroll');
    });
    });
  

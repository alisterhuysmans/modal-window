'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// open function
const openModal = function () {
  modal.classList.remove('hidden'); // don't use "." as it is not a selector
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

// close function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  // if (event.key === 'Escape') {
  //   if (!modal.classList.contains('hidden')) {
  //     closeModal();
  //   }
  // }              // aggregated if statements

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

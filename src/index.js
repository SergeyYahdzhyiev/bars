import './styles/main.css';

import { model } from './model';

model.forEach((block) => block.init());

const $modal = document.querySelector('.modal');
const $copyBtns = document.querySelectorAll('.modal-col span');

new ClipboardJS($copyBtns);

$modal.addEventListener('click', (e) => {
  if (e.target.dataset.close) {
    $modal.classList.remove('open');
  }
});

$copyBtns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    const btnText = e.target.textContent;
    e.target.textContent = 'Copied';
    setTimeout(() => (e.target.textContent = btnText), 1500);
  })
);

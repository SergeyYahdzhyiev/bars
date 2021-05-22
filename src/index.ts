import './styles/main.css';
import ClipboardJS from 'clipboard';

import { model } from './model';

model.forEach((block) => block.init());

const $modal = document.querySelector('.modal');
const $copyBtns = document.querySelectorAll('.modal-col span');

new ClipboardJS($copyBtns);

$modal?.addEventListener('click', (e) => {
  if ((<HTMLDivElement>e.target).dataset.close) {
    $modal.classList.remove('open');
  }
});

$copyBtns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    const btnText = (<HTMLButtonElement>e.target).textContent;
    (<HTMLButtonElement>e.target).textContent = 'Copied';
    setTimeout(
      () => ((<HTMLButtonElement>e.target).textContent = btnText),
      1500
    );
  })
);

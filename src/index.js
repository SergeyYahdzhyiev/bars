import './styles/main.css';

import { model } from './model';

model.forEach((block) => block.init());

const modal = document.querySelector('.modal');

modal.addEventListener('click', (e) => {
  if (e.target.dataset.close) {
    modal.classList.remove('open');
  }
});

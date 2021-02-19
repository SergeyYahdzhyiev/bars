import './styles/main.css';

const burger = document.querySelector('.burger');
console.log(burger);

burger.addEventListener('click', handleClick);

function handleClick() {
  burger.parentElement.classList.toggle('open');
}

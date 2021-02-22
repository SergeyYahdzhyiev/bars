import { Navbar } from './classes/navbar';
import './styles/main.css';

// const burger = document.querySelector('.burger');
// console.log(burger);

// burger.addEventListener('click', handleClick);

// function handleClick() {
//   burger.parentElement.classList.toggle('open');
// }

const container = document.querySelector('.navbar-container');

const navbar = new Navbar('nav-1').toHTML();

container.innerHTML = navbar;

const $navbar = document.getElementById('nav-1');

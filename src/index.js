import { Navbar } from './classes/navbar';
import './styles/main.css';

// const burger = document.querySelector('.burger');
// console.log(burger);

// burger.addEventListener('click', handleClick);

// function handleClick() {
//   burger.parentElement.classList.toggle('open');
// }

const styles = {
  nav: {
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'space-between',
    color: 'white',
    'background-color': 'rgb(0, 0, 0)',
    height: '10vh',
    overflow: 'hidden',
  },
  logo: {
    'font-size': '24px',
    'letter-spacing': '2px',
    'padding-left': '1.5em',
  },
  list: {
    display: 'flex',
    'justify-content': 'space-around',
    padding: '0 1em',
    height: '100%',
  },
  item: {
    display: 'flex',
    transition: 'background-color 200ms',
  },
  link: {
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',
    display: 'flex',
    padding: '0 1.5em',
    'font-size': '16px',
    'text-decoration': 'none',
    color: 'white',
  },
  hover: {
    'background-color': 'gray',
  },
  active: {
    'background-color': 'gray',
  },
};

const items = ['Home', 'Contacts', 'About'];

const container = document.querySelector('.navbar-container');

const navbar = new Navbar('nav-1', styles, items).toHTML();

container.innerHTML = navbar;

console.log(new Navbar('nav-1', styles, items).itemsToHTML());

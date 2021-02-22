import { Section } from './classes/section';

export const model = [
  new Section({
    id: 'nav-1',
    title: 'Simple Dark',
    styles: {
      nav: {
        color: 'white',
        'background-color': 'rgb(0, 0, 0)',
        height: '10vh',
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
    },
    items: ['Home', 'Contacts', 'About'],
  }),
  new Section({
    id: 'nav-2',
    title: 'Simple Light',
    styles: {
      nav: {
        color: 'black',
        'background-color': 'rgb(255, 255, 255)',
        height: '10vh',
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
        color: 'black',
      },
      hover: {
        'background-color': 'lightgray',
      },
      active: {
        'background-color': 'lightgray',
      },
    },
    items: ['Home', 'Contacts', 'About'],
  }),
  new Section({
    id: 'nav-3',
    title: 'Simple Blue',
    styles: {
      nav: {
        color: 'white',
        'background-color': 'blue',
        height: '10vh',
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
        'background-color': 'darkblue',
      },
      active: {
        'background-color': 'darkblue',
      },
    },
    items: ['Home', 'Contacts', 'About'],
  }),
];

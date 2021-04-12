import { Section } from './classes/section';

export const model = [
  new Section({
    id: 'nav-1',
    title: 'Simple Dark',
    type: 'simple',
    styles: {
      nav: {
        display: 'flex',
        'justify-content': 'space-between',
        'align-items': 'center',
        color: 'white',
        'background-color': 'rgb(0, 0, 0)',
        height: '10vh',
        margin: '1em 0',
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
    },
    items: ['Home', 'Contacts', 'About'],
  }),
  new Section({
    id: 'nav-2',
    title: 'Simple Light',
    type: 'simple',
    styles: {
      nav: {
        display: 'flex',
        'justify-content': 'space-between',
        'align-items': 'center',
        color: 'black',
        'background-color': 'rgb(255,255,255)',
        height: '10vh',
        margin: '1em 0',
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
    },
    items: ['Home', 'Contacts', 'About'],
  }),
];

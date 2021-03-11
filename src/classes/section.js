import { SimpleNavbar } from './navbar';

export class Section {
  constructor(options) {
    this.types = {
      simple: new SimpleNavbar(options),
    };

    this.id = options.id;
    this.options = options;
    this.navbar = this.types[options.type];
  }

  init() {
    const main = document.querySelector('main');

    main.insertAdjacentHTML('beforeend', this.toHTML());
    this.appendStyles();

    const $section = document.getElementById(this.id);
    const srcBtn = $section.querySelector('.get-code-btn');

    srcBtn.addEventListener('click', () => {
      document.querySelector('.modal').classList.add('open');
    });
  }

  appendStyles() {
    const styles = this.navbar.getStyles();

    const $style = document.createElement('style');
    $style.innerHTML = styles;

    document.head.appendChild($style);
  }

  toHTML() {
    const { title } = this.options;
    return `
      <section id="${this.id}" class="navbar-section-container">
        <h3 class="bar-title">${title}</h3>
        <div class="navbar-container">
          ${this.navbar.getHTML()}
        </div>
        <button class="get-code-btn">Get Source</button>
      </section>`;
  }
}

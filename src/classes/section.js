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

  #render() {
    const main = document.querySelector('main');

    main.insertAdjacentHTML('beforeend', this.html);
    this.appendStyles();
  }

  #initEvents() {
    const $section = document.getElementById(this.id);
    const navLinks = $section.querySelectorAll('.nav-list-item');

    navLinks.forEach((link) =>
      link.addEventListener('click', this.navbar.handler)
    );
  }

  #initSrcButton() {
    const $section = document.getElementById(this.id);
    const srcBtn = $section.querySelector('.get-code-btn');

    srcBtn.addEventListener('click', () => {
      const $htmlPre = document.getElementById('src-html');
      const $cssPre = document.getElementById('src-css');
      const $copyBtns = document.querySelectorAll('.modal-col span');

      $htmlPre.textContent = this.navbar.html;
      $cssPre.textContent = this.navbar.css.replace(/#nav-\d+ /g, '');

      $copyBtns[0].setAttribute('data-clipboard-text', $htmlPre.textContent);
      $copyBtns[1].setAttribute('data-clipboard-text', $cssPre.textContent);

      document.querySelector('.modal').classList.add('open');
    });
  }

  init() {
    this.#render();
    this.#initEvents();
    this.#initSrcButton();
  }

  appendStyles() {
    const styles = this.navbar.css;

    const $style = document.createElement('style');
    $style.innerHTML = styles;

    document.head.appendChild($style);
  }

  get html() {
    const { title } = this.options;
    return `
      <section id="${this.id}" class="navbar-section-container">
        <h3 class="bar-title">${title}</h3>
        <div class="navbar-container">
          ${this.navbar.html}
        </div>
        <button class="get-code-btn">Get Source</button>
      </section>`;
  }
}

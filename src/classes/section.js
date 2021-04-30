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

    main.insertAdjacentHTML('beforeend', this.toHTML());
    this.appendStyles();
  }

  init() {
    this.#render();

    const $section = document.getElementById(this.id);
    const srcBtn = $section.querySelector('.get-code-btn');
    const navLinks = $section.querySelectorAll('.nav-list-item');

    srcBtn.addEventListener('click', () => {
      const $htmlPre = document.getElementById('src-html');
      const $cssPre = document.getElementById('src-css');
      const $copyBtns = document.querySelectorAll('.modal-col span');

      $htmlPre.textContent = this.navbar.getHTML();
      $cssPre.textContent = this.navbar.getStyles().replace(/#nav-\d+ /g, '');

      $copyBtns[0].setAttribute('data-clipboard-text', $htmlPre.textContent);
      $copyBtns[1].setAttribute('data-clipboard-text', $cssPre.textContent);

      document.querySelector('.modal').classList.add('open');
    });

    navLinks.forEach((link) =>
      link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach((link) => link.classList.remove('active'));
        e.target.parentNode.classList.add('active');
      })
    );
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

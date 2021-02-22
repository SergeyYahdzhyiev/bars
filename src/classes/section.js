import { Navbar } from './navbar';

export class Section {
  constructor(options) {
    this.options = options;
    this.navbar = new Navbar(options);
  }

  init() {
    const main = document.querySelector('main');

    main.insertAdjacentHTML('beforeend', this.toHTML());
    this.navbar.init();
  }

  toHTML() {
    const { id, title } = this.options;
    return `
      <section id="${id}" class="navbar-section-container">
        <h3 class="bar-title">${title}</h3>
        <div class="navbar-container">
          ${this.navbar.toHTML()}
        </div>
        <button class="get-code-btn">Get Source</button>
      </section>`;
  }
}

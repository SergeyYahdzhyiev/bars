import { DropdownNavbar, SimpleNavbar, IStyles, IDropdown } from './navbar';

export interface IOptions {
  id: string;
  type: keyof ITypes;
  title: string;
  styles: IStyles;
  items: string[];
  dropdown?: IDropdown;
}

interface ITypes {
  simple: SimpleNavbar;
  dropdown: DropdownNavbar;
}

export class Section {
  id: string;
  options: IOptions;
  types: ITypes;
  navbar: SimpleNavbar | DropdownNavbar;

  constructor(options: IOptions) {
    this.types = {
      simple: new SimpleNavbar(options),
      dropdown: new DropdownNavbar(options),
    };

    this.id = options.id;
    this.options = options;
    this.navbar = this.types[options.type];
  }

  private render = () => {
    const main = document.querySelector('main');

    main?.insertAdjacentHTML('beforeend', this.html);
    this.appendStyles();
  };

  private initEvents = () => {
    const $section = document.getElementById(this.id);
    const navLinks = $section?.querySelectorAll('.nav-list-item');

    navLinks?.forEach((link) =>
      (link as HTMLElement).addEventListener('click', this.navbar.handler)
    );
  };

  private initSrcButton = () => {
    const $section = document.getElementById(this.id);
    const srcBtn = $section?.querySelector('.get-code-btn');

    srcBtn?.addEventListener('click', () => {
      const $htmlPre = document.getElementById('src-html');
      const $cssPre = document.getElementById('src-css');
      const $copyBtns = document.querySelectorAll('.modal-col span');

      $htmlPre && ($htmlPre.textContent = this.navbar.html);
      $cssPre &&
        ($cssPre.textContent = this.navbar.css.replace(/#nav-\d+ /g, ''));

      $htmlPre?.textContent &&
        $copyBtns[0].setAttribute('data-clipboard-text', $htmlPre.textContent);
      $cssPre?.textContent &&
        $copyBtns[1].setAttribute('data-clipboard-text', $cssPre.textContent);

      document.querySelector('.modal')?.classList.add('open');
    });
  };

  init = (): void => {
    this.render();
    this.initEvents();
    this.initSrcButton();
  };

  appendStyles = (): void => {
    const styles = this.navbar.css;

    const $style = document.createElement('style');
    $style.innerHTML = styles;

    document.head.appendChild($style);
  };

  get html(): string {
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

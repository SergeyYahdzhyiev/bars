import { parseStyles } from '../utils';
import { IOptions } from './section';

export interface IStyles {
  nav: Record<string, string | number>;
  logo: Record<string, string | number>;
  list: Record<string, string | number>;
  item: Record<string, string | number>;
  link: Record<string, string | number>;
  hover: Record<string, string | number>;
  dropdown?: IDropdownStyles;
  keyframes?: IKeyframes;
}

export interface IDropdown {
  title: string;
  items: string[];
}

interface IDropdownStyles {
  item: Record<string, string | number>;
  icon: Record<string, string | number>;
  content: Record<string, string | number>;
}

interface IKeyframes {
  name: string;
  from: Record<string, string | number>;
  to: Record<string, string | number>;
}

export class Navbar {
  id: string;
  styles: IStyles;
  items: string[];

  constructor(options: IOptions) {
    this.id = options.id;
    this.styles = options.styles;
    this.items = options.items;
  }

  get css(): string {
    throw new Error('Method getStyles must be realized!');
  }

  get html(): string {
    throw new Error('Method toHTML must be realized!');
  }
}

export class SimpleNavbar extends Navbar {
  constructor(options: IOptions) {
    super(options);
  }

  get css(): string {
    return `#${this.id} .nav {\n\t${parseStyles(this.styles.nav)}\n}\n#${
      this.id
    } .logo {\n\t${parseStyles(this.styles.logo)}\n}\n#${
      this.id
    } .nav-list {\n\t${parseStyles(this.styles.list)}\n}\n#${
      this.id
    } .nav-list-item {\n\t${parseStyles(this.styles.item)}\n}\n#${
      this.id
    } .nav-link {\n\t${parseStyles(this.styles.link)}\n}\n#${
      this.id
    } .nav-list-item:hover,\n#${
      this.id
    } .nav-list-item.active {\n\t${parseStyles(this.styles.hover)}\n}\n`;
  }

  get html(): string {
    return `
<nav class="nav">
  <div class="logo">[ LOGO ]</div>
  <ul class="nav-list">
    ${this.getItems(this.items)}
  </ul>
</nav>
          `;
  }

  getItems = (items: string[]): string => {
    return items
      .map((item, index) =>
        index === 0
          ? `<li class="nav-list-item active">
      <a href="#" class="nav-link">${item}</a>
    </li>`
          : `<li class="nav-list-item">
      <a href="#" class="nav-link">${item}</a>
    </li>`
      )
      .join('');
  };

  get handler() {
    return (e: MouseEvent): void => {
      e.preventDefault();
      document
        .querySelectorAll(`#${this.id} .nav-list-item`)
        .forEach((link) => link.classList.remove('active'));

      const target: HTMLElement = (<HTMLElement>e.target)
        .parentNode as HTMLElement;
      target.classList.add('active');
    };
  }
}

export class DropdownNavbar extends Navbar {
  dropdown: IDropdown | undefined;

  constructor(options: IOptions) {
    super(options);

    this.dropdown = options.dropdown;
  }

  get css(): string {
    return `#${this.id} .nav {\n\t${parseStyles(this.styles.nav)}\n}\n#${
      this.id
    } .logo {\n\t${parseStyles(this.styles.logo)}\n}\n#${
      this.id
    } .nav-list {\n\t${parseStyles(this.styles.list)}\n}\n#${
      this.id
    } .nav-list-item {\n\t${parseStyles(this.styles.item)}\n}\n#${
      this.id
    } .nav-link {\n\t${parseStyles(this.styles.link)}\n}\n#${
      this.id
    } .nav-list-item:hover,\n#${
      this.id
    } .nav-list-item.active {\n\t${parseStyles(this.styles.hover)}\n}\n#${
      this.id
    } .dropdown-icon {\n\t${parseStyles(this.styles.dropdown?.icon)}\n}\n#${
      this.id
    } .nav-list-item.dropdown {\n\t${parseStyles(this.styles.dropdown?.item)}
\n}\n#${this.id} .dropdown-content {\n\t${parseStyles(
      this.styles.dropdown?.content
    )}\n}\n#${
      this.id
    } .nav-list-item.dropdown:hover .dropdown-content {\n\tdisplay: flex;\n}\n#${
      this.id
    } .nav-list-item.dropdown:hover .dropdown-icon {\n\ttransform: rotate(180deg)\n}\n#${
      this.id
    } .dropdown-content .nav-link {\n\theight: 10vh;\n}\n@keyframes ${
      this.styles.keyframes?.name
    } {\n    from {\n\t${parseStyles(
      this.styles.keyframes?.from
    )}\n\t}\n    to {\n\t${parseStyles(this.styles.keyframes?.to)}\n\t}\n}`;
  }

  get html(): string {
    return `
<nav class="nav">
  <div class="logo">[ LOGO ]</div>
  <ul class="nav-list">
    ${this.getItems(this.items)}
    ${this.getDropdown()}
  </ul>
</nav>
          `;
  }

  getItems = (items: string[] | undefined): string => {
    if (!items) return '';
    return items
      .map((item, index) =>
        index === 0
          ? `<li class="nav-list-item active">
      <a href="#" class="nav-link">${item}</a>
    </li>`
          : `<li class="nav-list-item">
      <a href="#" class="nav-link">${item}</a>
    </li>`
      )
      .join('');
  };

  getDropdown = (): string => {
    return `<li class="nav-list-item dropdown">
      <span class="nav-link">${this.dropdown?.title}</span>
      <span class="dropdown-icon">&#709;</span>
      <ul class="dropdown-content nav-list">
        ${this.getItems(this.dropdown?.items)}
      </ul>
    </li>`;
  };

  get handler() {
    return (e: MouseEvent): void => {
      e.preventDefault();
      document
        .querySelectorAll(`#${this.id} .nav-list-item`)
        .forEach((link) => link.classList.remove('active'));
      const target: HTMLElement = (<HTMLElement>e.target)
        .parentNode as HTMLElement;
      target.classList.add('active');
    };
  }
}

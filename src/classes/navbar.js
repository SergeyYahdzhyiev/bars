import { parseStyles } from '../utils';

export class Navbar {
  constructor(options) {
    this.id = options.id;
    this.styles = options.styles;
    this.items = options.items;
  }

  get css() {
    throw new Error('Method getStyles must be realized!');
  }

  get html() {
    throw new Error('Method toHTML must be realized!');
  }
}

export class SimpleNavbar extends Navbar {
  constructor(options) {
    super(options);
  }

  get css() {
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

  get html() {
    return `
<nav class="nav">
  <div class="logo">[ LOGO ]</div>
  <ul class="nav-list">
    ${this.getItems(this.items)}
  </ul>
</nav>
          `;
  }

  getItems(items) {
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
  }

  get handler() {
    return (e) => {
      e.preventDefault();
      document
        .querySelectorAll(`#${this.id} .nav-list-item`)
        .forEach((link) => link.classList.remove('active'));
      e.target.parentNode.classList.add('active');
    };
  }
}

export class DropdownNavbar extends Navbar {
  constructor(options) {
    super(options);

    this.dropdown = options.dropdown;
  }

  get css() {
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
    } .dropdown-icon {\n\t${parseStyles(this.styles.dropdown.icon)}\n}\n#${
      this.id
    } .nav-list-item.dropdown {\n\t${parseStyles(this.styles.dropdown.item)}
\n}\n#${this.id} .dropdown-content {\n\t${parseStyles(
      this.styles.dropdown.content
    )}\n}\n#${
      this.id
    } .nav-list-item.dropdown:hover .dropdown-content {\n\tdisplay: flex;\n}\n#${
      this.id
    } .nav-list-item.dropdown:hover .dropdown-icon {\n\ttransform: rotate(180deg)\n}\n#${
      this.id
    } .dropdown-content .nav-link {\n\theight: 10vh;\n}\n@keyframes ${
      this.styles.keyframes.name
    } {\n    from {\n\t${parseStyles(
      this.styles.keyframes.from
    )}\n\t}\n    to {\n\t${parseStyles(this.styles.keyframes.to)}\n\t}\n}`;
  }

  get html() {
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

  getItems(items) {
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
  }

  getDropdown() {
    return `<li class="nav-list-item dropdown">
      <span class="nav-link">${this.dropdown.title}</span>
      <span class="dropdown-icon">&#709;</span>
      <ul class="dropdown-content nav-list">
        ${this.getItems(this.dropdown.items)}
      </ul>
    </li>`;
  }

  get handler() {
    return (e) => {
      e.preventDefault();
      document
        .querySelectorAll(`#${this.id} .nav-list-item`)
        .forEach((link) => link.classList.remove('active'));
      e.target.parentNode.classList.add('active');
    };
  }
}

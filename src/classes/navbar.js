import { parseStyles } from '../utils';

export class Navbar {
  constructor(options) {
    this.id = options.id;
    this.styles = options.styles;
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
    <li class="nav-list-item active">
      <a href="#" class="nav-link">Home</a>
    </li>
    <li class="nav-list-item">
      <a href="#" class="nav-link">Contacts</a>
    </li>
    <li class="nav-list-item">
      <a href="#" class="nav-link">About</a>
    </li>
  </ul>
</nav>
          `;
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

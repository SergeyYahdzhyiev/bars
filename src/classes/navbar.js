import { css, property } from '../utils';

export class Navbar {
  constructor(id, styles, items) {
    this.id = id;
    this.styles = styles;
    this.items = items;

    this.handleHoverEnter = this.handleHoverEnter.bind(this);
    this.handleHoverExit = this.handleHoverExit.bind(this);

    this.init();
  }

  init() {
    const container = document.querySelector('.navbar-container');
    const navbar = this.toHTML();
    container.innerHTML = navbar;

    const links = document.querySelectorAll(`#${this.id}-link`);

    links.forEach((link) => {
      link.addEventListener('mouseover', this.handleHoverEnter);
      link.addEventListener('mouseout', this.handleHoverExit);
    });
  }

  handleHoverEnter(e) {
    property('set', this.styles.hover, e);
  }
  handleHoverExit(e) {
    property('remove', this.styles.hover, e);
  }

  itemsToHTML(items = []) {
    const html = items
      .map((item, index) => {
        if (index === 0) {
          return `
              <li id="${
                this.id
              }-link" class="navbar-list-item active" style="${css(
            this.styles.item
          )};${css(this.styles.active)}">
                <a href="#" class="navbar-link" style="${css(
                  this.styles.link
                )}">${item}</a>
              </li>`;
        } else {
          return `
              <li id="${this.id}-link" class="navbar-list-item" style="${css(
            this.styles.item
          )}">
                <a href="#" class="navbar-link" style="${css(
                  this.styles.link
                )}">${item}</a>
              </li>`;
        }
      })
      .join('');
    return html;
  }

  toHTML() {
    return `
          <nav class="navbar" id="${this.id}" style="${css(this.styles.nav)}">
            <div class="logo" style="${css(this.styles.logo)}">[ LOGO ]</div>
            <ul class="navbar-list" style="${css(this.styles.list)}">
              ${this.itemsToHTML(this.items)}
            </ul>
          </nav>
          `;
  }
}

export class Navbar {
  constructor(id) {
    this.id = id;
  }

  toHTML() {
    return `
          <nav class="navbar" id="${this.id}">
            <div class="logo">[ LOGO ]</div>
            <ul class="navbar-list">
              <li class="navbar-list-item">
                <a href="#" class="navbar-link active">Home</a>
              </li>
              <li class="navbar-list-item">
                <a href="#" class="navbar-link">Contacts</a>
              </li>
              <li class="navbar-list-item">
                <a href="#" class="navbar-link">About</a>
              </li>
            </ul>
          </nav>
          `;
  }
}

class NewUser extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = null;
    this._firstName = null;
    this._lastName = null;
    this._email = null;
  }
}
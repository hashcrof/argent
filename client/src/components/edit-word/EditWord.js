class EditWord extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
    this._form = document.createElement('form');
    this._input = document.createElement('input');
    this._span = document.createElement('span');

    this._style = document.createElement('style');
    this._style.textContent = 'span { background-color: #eef; padding: 0 2px }';

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.appendChild(this._form);
    this._shadowRoot.appendChild(this._span);

    this._span.textContent = this.textContent;
    this._input.value = this.textContent;

    this._form.appendChild(this._input);
    this._form.style.display = 'none';
    this._span.style.display = 'inline-block';
    this._input.style.width = this._span.clientWidth + 'px';

    this.setAttribute('tabindex', '0');
    this._input.setAttribute('required', 'required');
    this.style.display = 'inline-block';

    this.addEventListener('click', () => {
      this._span.style.display = 'none';
      this._form.style.display = 'inline-block';
      this._input.focus();
      this._input.setSelectionRange(0, this._input.value.length)
    });

    this._form.addEventListener('submit', e => {
      this.updateDisplay();
      e.preventDefault();
    });

    this._input.addEventListener('blur', this.updateDisplay);
  };

  updateDisplay() {
    this._span.style.display = 'inline-block';
    this._form.style.display = 'none';
    this._span.textContent = this._input.value;
    this._input.style.width = this._span.clientWidth + 'px';
  }
}

export default EditWord;

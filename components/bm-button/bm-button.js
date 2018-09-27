
import {LitElement, html} from '@polymer/lit-element';
import {style} from './bm-button-css';

export class BMButton extends LitElement {

  static get properties() { 
    return {
      label: {type: String},
      disabled: {type: Boolean}
    }
  }

  constructor() {
    super();
    this.label = '';
    this.disabled = false;
  }

  static get is(){
    return 'bm-button';
  }

  _renderStyle(){
    return style;
  }

  render() {
    const {label, disabled} = this;
    return html`
      ${this._renderStyle()}
      <button type="button" class="bm-button outlined" ?disabled="${disabled}">
        ${label}
        <slot></slot>
      </button>
    `;
  }

}

window.customElements.define(BMButton.is, BMButton);

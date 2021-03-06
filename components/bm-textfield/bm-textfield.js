
import {LitElement} from '@polymer/lit-element';
import {html} from '../../node_modules/lit-html/';
import {classMap} from '../../node_modules/lit-html/directives/classMap.js';
import {MDCTextField} from '@material/textfield';
import {style} from './bm-textfield-css';

export class BMTextfield extends LitElement {

  static get is(){
    return 'bm-textfield';
  }

  static get properties() { 
    return {
      value: {type: String},
      label: {type: String},
      icon: {type: String},
      iconTrailing: {type: Boolean},
      box: {type: Boolean},
      outlined: {type: Boolean},
      disabled: {type: Boolean},
      fullWidth: {type: Boolean},
      required: {type: Boolean},
      helperText: {type: String},
      placeHolder: {type: String},
      type: {type: String}
    }
  }
  
  constructor(){
    super();
    this._asyncComponent = true;
    this.required = false;
    this.value = '';
    this.label = '';
    this.icon = '';
    this.iconTrailing = false;
    this.helperText = '';
    this.box = false;
    this.outlined = false;
    this.disabled = false;
    this.fullWidth = false;
    this.placeHolder = '';
    this.type = '';

    this.handleInput = this.handleInput.bind(this);
  }

  // get value(){
  //   return this.value;
  // }

  firstUpdated(changedProperties) {
    const textField = new MDCTextField(this.shadowRoot.querySelector('.mdc-text-field'));
  }

  createRenderRoot() {
    return this.attachShadow({mode: 'open', delegatesFocus: true});
  }

  //shouldUpdate(changedProperties){
    //console.log(changedProperties);
  //}

  _renderStyle(){
    return style;
  }

  render() {
    const {value, label, box, outlined, disabled, icon, iconTrailing, fullWidth, required, placeHolder, helperText, type} = this;
    const hostClassInfo = {
      'mdc-text-field--with-leading-icon': icon && !iconTrailing,
      'mdc-text-field--with-trailing-icon': icon && iconTrailing,
      'mdc-text-field--box': !fullWidth && box,
      'mdc-text-field--outlined': !fullWidth && outlined,
      'mdc-text-field--disabled': disabled,
      'mdc-text-field--fullwidth': fullWidth,
    };
    return html`
      ${this._renderStyle()}
      <div class="mdc-text-field mdc-text-field--upgraded ${classMap(hostClassInfo)}">
        ${this._renderInput({value, required, type, placeHolder, label})}
        ${!fullWidth && label ? html`<label class="mdc-floating-label ${value ? 'mdc-floating-label--float-above' : ''}" for="text-field">${label}</label>` : ''}
        ${!fullWidth && outlined ? html`<div class="mdc-notched-outline">
            <svg><path class="mdc-notched-outline__path"/></svg>
          </div>
          <div class="mdc-notched-outline__idle"></div>` :
          html`<div class="mdc-line-ripple"></div>`}
      </div>
    `;
  }

  _renderInput({value, required, type, placeHolder, label}) {
    return html`<input 
                  type="${type}" 
                  placeholder="${placeHolder}" 
                  ?required="${required}" 
                  class="mdc-text-field__input ${value ? 'mdc-text-field--upgraded' : ''}" 
                  id="text-field" 
                  .value="${value}" 
                  aria-label="${label}"
                  @input="${this.handleInput}"
                >`;
  }

  handleInput(e) {
    this.value = e.target.value;
  }

}

window.customElements.define(BMTextfield.is, BMTextfield);

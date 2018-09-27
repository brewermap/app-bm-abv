import {LitElement, html} from '@polymer/lit-element';
import {BMTopAppBar} from './components/bm-top-app-bar/bm-top-app-bar';
import {BMTextfield} from './components/bm-textfield/bm-textfield';
import {BMButton} from './components/bm-button/bm-button';
import {style} from './app-bm-abv-css';

export class AppBMABV extends LitElement {
  constructor(){
    super();
    
  }

  static get is(){
    return 'app-bm-abv';
  }

  static get properties(){
    return {
      abv: {
        type: Number
      }
    }
  }

  _renderStyles(){
    return style;
  }

  render(){
    return html`
      ${this._renderStyles()}
      <bm-top-app-bar title="ABV Calculator" menu></bm-top-app-bar>
      <div class="bm-abv-container">
        <div class="bm-abv-result ${this.abv <= 0 ? 'bm-abv-result_disabled' : ''}">
          <h1 class="bm-abv-result-number">${this.abv ? this.abv.toFixed(2) : '0.00'}</h1>
          <small class="bm-abv-result-tag">ABV</small>
        </div>
        <bm-textfield id="inputOG" value="1065" type="number" label="Gravedad Original (OG)" outlined></bm-textfield>
        <bm-textfield id="inputFG" value="1008" type="number" label="Gravedad Final (FG)" outlined></bm-textfield>
        <bm-button id="btnCalc">Calcular</bm-button>
      </div>
    `;
  }

  firstUpdated(changedProperties) {
    const btnCalc = this.shadowRoot.querySelector('#btnCalc');
    const inputOG = this.shadowRoot.querySelector('#inputOG');
    const inputFG = this.shadowRoot.querySelector('#inputFG');
    btnCalc.addEventListener('click', () => {
      this._calculateABV(Number(inputOG.value), Number(inputFG.value));
    });
    this.abv = 0.00;
  }

  _calculateABV(og, fg){
    let tempABV = 0;
    if(og && fg){
      og = og > 999 ? og/1000 : og;
      fg = fg > 999 ? fg/1000 : fg;
      //if(this.get('equation') === 'Standard') {
      tempABV = (og - fg)*131.25;
      //} else {
      //  tempABV = (76.08 * (og-fg) / (1.775-og)) * (fg / 0.794);
      //}
      //this.set('abv', tempABV.toFixed(2));
      //this.dispatchEvent(new CustomEvent('calculated', {detail: tempABV.toFixed(4)}))
      this.abv = tempABV;
    }
  }
}

window.customElements.define(AppBMABV.is, AppBMABV);
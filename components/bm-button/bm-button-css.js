import {html} from '@polymer/lit-element/lit-element.js';

export const style = html`
  <style>
    :host {
      outline: none;
      display: block;
      /*TEMP*/
      --bm-typography-font-family: 'Raleway', sans-serif;
      --bm-color-pale-100: #DCC77C;
      --bm-color-pale-500: #C9A732;
      --bm-color-pale-900: #937A25;

      --bm-primary-color: var(--bm-color-pale-500);
      --bm-primary-color-tint: var(--bm-color-pale-100);
      --bm-primary-color-shade: var(--bm-color-pale-900);
    }

    .bm-button {
      position: relative;
      padding: 8px 18px;
      background: #c9a732;
      border: none;
      font-size: 1rem;
      text-transform: uppercase;
      border-radius: 3px;
      outline: none;
      color: var(--bm-primary-color-shade);
      cursor: pointer;
      /*TEMP*/
      font-family: var(--bm-typography-font-family);
      font-weight: 500;
      letter-spacing: 1px;
      width: 100%;
    }

    .outlined {
      background: transparent;
      border: 1px solid var(--bm-primary-color);
    }

    .outlined:before {
      content: "";
      position: absolute;
      background: var(--bm-primary-color-tint);
      bottom: 0;
      left: 0;
      right: 0;
      top: 100%;
      z-index: -1;
      -webkit-transition: top 0.09s ease;
    }
    
    .outlined:hover:before {
      top: 0;
    }
    
    .outlined:active {
      background: var(--bm-primary-color);
    }

    
  </style>
`;
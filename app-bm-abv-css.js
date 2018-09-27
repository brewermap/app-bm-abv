import {html} from '@polymer/lit-element';

export const style = html`
  <style>

    .bm-abv-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px;
    }
    .bm-abv-container bm-textfield, .bm-abv-container bm-button {
      margin: 10px 0;
    }
    #btnCalc {
      min-width: 241px;
    }

    .bm-abv-result {
      font-family: 'Raleway', sans-serif;
      min-width: 241px;
    }

    .bm-abv-result .bm-abv-result-number {
      display: inline-block;
      font-size: 58px;
    }

    .bm-abv-result .bm-abv-result-tag {
      display: inline-block;
      font-size: 28px;
    }

    .bm-abv-result_disabled {
      color: #CECECE;
    }
  </style>
`;
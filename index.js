import {SharesService} from './api-services/shares.service.js';
import {SellStrategiesComponent} from './ui-builder/sell-strategies/sell-strategies.component.js';
import {mappedStrategies} from './sell-strategies/index.js';
import {remainsShares} from './shares-calculation/remaing-shares.js';
import {costBasesOfSoldShares} from './shares-calculation/cost-bases-of-sold-shares.js';
import {costBasesOfRemainingShares} from './shares-calculation/cost-bases-of-remaing-shares.js';

const sellStrategiesComponent = new SellStrategiesComponent();

(function () {
  const sharesService = new SharesService();

  document.addEventListener('DOMContentLoaded', function () {
    const sharesEl = document.getElementById('shares');
    const priceEl = document.getElementById('price');
    const strategyEl = document.getElementById('strategy');

    buildUI();

    sharesService
      .getShares()
      .then(
        (shares) => {
          console.log(shares);
          const form = document.getElementById('sell-form');
          form.addEventListener('submit', ($event) => {
            $event.preventDefault();
            const Strategy = mappedStrategies[strategyEl.value];
            const sellStrategy = new Strategy(JSON.parse(JSON.stringify(shares)));

            const sellingPrice = Number.parseInt(priceEl.value, 10);
            const sellingSharesQuantity = Number.parseInt(sharesEl.value, 10);

            const shareFromStrategy = sellStrategy.pop();

            console.log('remainsShares = ', remainsShares(shares, sellingSharesQuantity));
            console.log('costBasesOfSoldShares = ', costBasesOfSoldShares(shareFromStrategy, sellingSharesQuantity, sellingPrice));
            console.log('costBasesOfRemainingShares = ', costBasesOfRemainingShares(shares, shareFromStrategy, sellingSharesQuantity));
          });
        },
        (error) => {

        }
      );

    function buildUI() {
      sellStrategiesComponent.appendOptions(strategyEl);
    }


  });
})();



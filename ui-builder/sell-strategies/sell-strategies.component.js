import {SELL_STRATEGIES} from '../../sell-strategies/index.js';

export class SellStrategiesComponent {
  constructor() {
  }

  appendOptions(element) {
    SELL_STRATEGIES.forEach((strategyName) => {
      element.appendChild(this.buildOption(strategyName));
    });
  }

  buildOption(strategyName) {
    const option = document.createElement('option');
    option.innerHTML = strategyName;
    option.value = strategyName;
    return option;
  }
}

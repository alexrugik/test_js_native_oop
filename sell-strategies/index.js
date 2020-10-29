import {LIFOStrategy} from './lifo-strategy.js';
import {FIFOStrategy} from './fifo.strategy.js';

export const SELL_STRATEGIES = [LIFOStrategy.name, FIFOStrategy.name];

export const mappedStrategies = {
  [LIFOStrategy.name]: LIFOStrategy,
  [FIFOStrategy.name]: FIFOStrategy
};

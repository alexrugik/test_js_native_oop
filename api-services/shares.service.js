const SHARES_MOCK_DATA = [
  {quantity: 100, price: 20, date: 'January'},
  {quantity: 150, price: 30, date: 'February3'},
  {quantity: 120, price: 10, date: 'March'},
];

export class SharesService {
  constructor() {
  }

  getShares() {
    return Promise.resolve(SHARES_MOCK_DATA)
  }
}

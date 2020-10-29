// first in first out
export class FIFOStrategy {
  static name = 'fifo';
  constructor(data) {
    if (!data) {
      throw new Error('No data for FIFOStrategy!');
    }
    this.data = data;
  }

  push(item) {
    this.data.push(item);
    return true;
  }

  pop() {
    return this.data.pop();
  }

  getData() {
    return this.data;
  }
}

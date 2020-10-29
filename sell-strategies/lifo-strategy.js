//last in / first out
export class LIFOStrategy {
  static name = 'lifo';
  constructor(data) {
    if (!data) {
      throw new Error('No data for LIFOStrategy!');
    }
    this.data = data;
  }

  push(item) {
    this.data.push(item);
    return true;
  }

  pop() {
    return this.data.shift();
  }

  getData() {
    return this.data;
  }
}

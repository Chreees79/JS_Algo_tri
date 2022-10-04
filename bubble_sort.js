import Utils from "./utils";

class BubbleSort {
  constructor(count) {
    this.count = 0;
  }

  sortBy(data) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (data[j] < data[j - 1]) {
          this.count += 1;
          this.swap(data[j], data[j - 1]);
        }
      }
    }
    console.log(data);
    console.log(this.count);
  }
  swap(data, x) {
    let temp = data[x];
    data[x] = data[x - 1];
    data[x - 1] = temp;
  }
}
export default BubbleSort;

class Utils {
  constructor() {}

  static fileInArray(data) {
    const arrFile = data.split(" ").map((x) => Number.parseInt(x));
  }
}
export default Utils;

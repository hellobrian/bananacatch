export default class Random {
  number = (min, max) => Math.floor(Math.random() * (max - min) + min);

  size = () => {
    const sizeList = Random.sizes;
    return sizeList[this.number(0, 9)];
  };

  static sizes = [40, 45, 50, 55, 60, 65, 70, 80, 85, 90];
}

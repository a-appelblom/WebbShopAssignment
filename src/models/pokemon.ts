export default class Pokemon {
  index: number;
  name: string;
  sprite: string;
  weight: number;
  height: number;
  constructor(
    index: number,
    name: string,
    sprite: string,
    weight: number,
    height: number
  ) {
    this.index = index;
    this.name = name;
    this.sprite = sprite;
    this.weight = weight;
    this.height = height;
  }
  price = (): number => {
    return Math.round((this.weight) / (this.height) + 1);
  };
}

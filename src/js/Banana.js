import { times } from 'lodash';
import Random from './Random';

export default class Banana {
  points = (fontSize = 40) =>
    Banana.sizesAndPoints.list.filter(object => object.size === fontSize)[0]
      .points;

  style = (fontSize = 40) =>
    `font-size: ${fontSize}px; width: ${fontSize}px; height: ${fontSize}px`;

  html = (fontSize = 40) => {
    const points = this.points(fontSize);

    return `
      <button
        class="banana slideDown-animation" 
        data-points="${points}"
        style="${this.style(fontSize)}"
        type="button"
      >
        <span 
          class="swing-animation" 
          data-points="${points}" 
          style="${this.style(fontSize)}"
        >
          🍌
        </span>
      </button>
    `.trim();
  };

  static sizesAndPoints = {
    max: Banana.sizesAndPointsMaxPoints(),
    list: Banana.sizesAndPointsList(),
  };

  static sizesAndPointsMaxPoints() {
    return 100;
  }

  static sizesAndPointsList() {
    const maxPoints = Banana.sizesAndPointsMaxPoints();
    return Random.sizes.map((size, index) => ({
      size,
      points: times(10).map((_, index) => maxPoints - index * 10)[index],
    }));
  }
}

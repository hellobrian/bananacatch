import { randomSize } from "/utils";

const circleSvg = (size = 100, fill = "blue") => {
  const radius = size / 2;
  return `
    <svg 
      class="animation"
      width="${size}"
      height="${size}" 
      viewBox="0 0 ${size} ${size}" 
      fill=${fill}
    >
      <circle cx=${radius} cy=${radius} r=${radius} />
    </svg>
  `;
};

const banana = (fontSize = 40) => {
  return `
    <button 
      class="banana animation" 
      type="button"
      style="font-size: ${fontSize}px"
    >
      🍌
    </button>
  `;
};

export { circleSvg, banana };

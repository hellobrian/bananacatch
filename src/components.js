import { sizesAndPoints } from "./methods";

export const banana = (fontSize = 40) => {
  const { points } = sizesAndPoints.filter(object => object.size === fontSize)[0];

  return `
    <button
      data-points="${points}"
      class="banana slideDown-animation" 
      type="button"
      style="font-size: ${fontSize}px; width: ${fontSize}px; height: ${fontSize}px"
    >
      <span class="swing-animation" style="width: ${fontSize}px; height: ${fontSize}px">🍌</span>
    </button>
  `;
};

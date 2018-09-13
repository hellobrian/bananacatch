import { sizesAndPoints } from "./constants";

export const banana = (fontSize = 40) => {
  const { points } = sizesAndPoints.filter(object => object.size === fontSize)[0];

  return `
    <button
      data-points="${points}"
      class="banana slideDown-animation" 
      type="button"
      style="font-size: ${fontSize}px; width: ${fontSize}px; height: ${fontSize}px"
    >
      <span class="swing-animation" data-points="${points}" style="width: ${fontSize}px; height: ${fontSize}px">🍌</span>
    </button>
  `.trim();
};

export const menuIcon = (fill = "#000", width = 20, height = 14) => {
  return `<svg fill=${fill} width=${width}" height=${height} viewBox="0 0 ${width} ${height}"><path d="M0 0h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"></path></svg>`;
};

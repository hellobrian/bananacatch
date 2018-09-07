const banana = (fontSize = 40) => {
  return `
    <button 
      class="banana animation" 
      type="button"
      style="font-size: ${fontSize}px; width: ${fontSize}px; height: ${fontSize}px"
    >
      🍌
    </button>
  `;
};

export { banana };

// Return random hex string
export const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Return random number between min and max
export const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

// Return random number between 40 - 100
export const maxSize = 150;
export const minSize = 50;
export const randomSize = () => randomNumber(minSize, maxSize);

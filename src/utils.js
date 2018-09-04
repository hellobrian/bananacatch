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

export const maxSize = 100;
export const minSize = 10;
// export const randomSize = () => randomNumber(minSize, maxSize);

export const sizes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
export const randomSize = () => sizes[randomNumber(0, 9)];

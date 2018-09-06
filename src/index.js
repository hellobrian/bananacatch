import { $, $$ } from './bling';

const state = {
  isPlaying: false,
};

const circleSvg = (size = 100, fill = 'blue') => {
  const radius = size / 2;
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill=${fill}>
      <circle cx=${radius} cy=${radius} r=${radius} />
    </svg>
  `;
};

$('.togglePlay').on('click', () => {
  // toggle isPlaying state
  state.isPlaying = !state.isPlaying;

  const animationPlayState = state.isPlaying ? 'running' : 'paused';
  document.documentElement.style.setProperty(
    '--animation-play-state',
    animationPlayState,
  );

  // Change togglePlay button to say Paused or Start based on state
  $('.togglePlay').innerHTML = state.isPlaying ? 'Paused' : 'Start';
});

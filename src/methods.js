import { $, $$ } from './bling';
import { banana } from './components';
import { sizes } from './constants';

/**
 * Random
 */
export class Random {
  number = (min, max) => Math.floor(Math.random() * (max - min) + min);

  size = () => {
    const sizeList = Random.sizes;
    return sizeList[this.number(0, 9)];
  };

  static sizes = sizes;
}

/**
 * Banana methods
 */
export const insertBanana = () => {
  const random = new Random();
  let id = random.number(1, 5);
  let fontSize = random.size();
  $(`#column-${id}`).insertAdjacentHTML('afterbegin', banana(fontSize));
};

export const destroyBananas = () => {
  $$('.column').forEach(element => {
    element.innerHTML = ''.trim();
  });
};

export const shouldDisableBananas = (playState, bananas) =>
  bananas.forEach(element => {
    element.disabled = playState === 'running' ? false : true;
  });

/**
 * InnerHTML methods
 */

export const setScoreInnerHTML = ({ score }) => {
  $('#score').innerHTML = `${score}pts`;
};

export const setLabelInnerHTML = value => {
  $('.label').innerHTML = `Speed: ${value}%`;
};

export const setPlayButtonInnerHTML = ({ isPlaying }) => {
  $('.togglePlay').innerHTML = isPlaying ? 'Pause' : 'Start';
};

/**
 * State methods
 */
export const getAnimationPlayState = rootElement =>
  getComputedStyle(rootElement)
    .getPropertyValue('--animation-play-state')
    .trim();

export const togglePlayState = (state, rootElement) => {
  rootElement.style.setProperty(
    '--animation-play-state',
    state.isPlaying ? 'running' : 'paused',
  );
  setPlayButtonInnerHTML(state);
};

export const resetPlayState = (state, rootElement) => {
  const defaultStyle = `
    --animation-play-state: ${
      state.isPlaying ? 'running' : 'paused'
    }; --animation-play-speed: ${state.defaultAnimationDuration}ms;`.trim();
  rootElement.setAttribute('style', defaultStyle);
};

export const calculateAnimationSpeedPercent = state => {
  const calcSpeedPercent = state.animationSpeedPercent / 100;
  const calcSpeed = state.fastestAnimationDuration / calcSpeedPercent;
  return `${calcSpeed}ms`;
};

export const changeAnimationSpeedPercent = (state, rootElement) => {
  const calcSpeed = calculateAnimationSpeedPercent(state);
  rootElement.style.setProperty('--animation-play-speed', `${calcSpeed}`);
};

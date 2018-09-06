import { $, $$ } from './bling';
import { randomNumber } from './utils';
import { circleSvg } from './components';

let intervalId1;
let state = {
  isPlaying: false,
};

// const insertDots = () => {
//   $$('.column').forEach((element, index) =>
//     element.insertAdjacentHTML('afterbegin', circleSvg(100, 'blue', index)),
//   );
// };

const insertDot = id => () => {
  $(`#column-${id}`).insertAdjacentHTML('afterbegin', circleSvg(100, 'blue'));
};

const destroyDots = () => {
  $$('.column').forEach((element, index) => {
    element.innerHTML = '';
  });
};

const destroyDotsOnAnimationEnd = () => {
  if ($$('svg') && $$('svg').length > 0) {
    $$('svg').forEach(element =>
      element.on('animationend', event => {
        element.parentNode.removeChild(element);
      }),
    );
  }
};

$('.togglePlay').on('click', function() {
  state = { isPlaying: !state.isPlaying };

  document.documentElement.style.setProperty(
    '--animation-play-state',
    state.isPlaying ? 'running' : 'paused',
  );

  // Change togglePlay button to say Paused or Start based on state
  $('.togglePlay').innerHTML = state.isPlaying ? 'Paused' : 'Start';

  const animationPlayState = getComputedStyle(document.documentElement)
    .getPropertyValue('--animation-play-state')
    .trim();

  console.log({ animationPlayState });
  if (animationPlayState === 'running') {
    intervalId1 = setInterval(insertDot(1), 500);
  }

  if (animationPlayState === 'paused') {
    clearInterval(intervalId1);
  }
});

$('.reset').on('click', () => {
  destroyDots();
  clearInterval(intervalId1);
});

// MUTATION OBSERVER
const observer = new MutationObserver(mutationsList => {
  for (var mutation of mutationsList) {
    if (mutation.type == 'childList') {
      const svgNode = [...mutation.addedNodes].filter(
        node => node.nodeName === 'svg',
      );

      if (svgNode && svgNode.length > 0) {
        const svg = svgNode[0];
        svg.classList.remove('animation');
        svg.classList.add('animation');
        svg.addEventListener('animationend', event => {
          event.target.parentNode.removeChild(event.target);
        });
      }
    }
  }
});
observer.observe($('#html'), {
  attributes: false,
  childList: true,
  subtree: false,
});

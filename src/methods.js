import { $, $$ } from "./bling";
import { banana } from "./components";
import { times } from "lodash";

export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const sizes = [40, 45, 50, 55, 60, 65, 70, 80, 85, 90];

export const points = times(10).map(index => {
  const maxPoints = 100;
  return maxPoints - index * 10;
});

export const sizesAndPoints = sizes.map((size, index) => ({
  size,
  points: points[index]
}));

export const randomSize = () => sizes[randomNumber(0, 9)];

export const getAnimationPlayState = rootElement =>
  getComputedStyle(rootElement)
    .getPropertyValue("--animation-play-state")
    .trim();

export const insertBanana = () => {
  let id = randomNumber(1, 5);
  let fontSize = randomSize();
  $(`#column-${id}`).insertAdjacentHTML("afterbegin", banana(fontSize));
};

export const togglePlayState = (state, rootElement) => {
  rootElement.style.setProperty("--animation-play-state", state.isPlaying ? "running" : "paused");
};

export const changeAnimationSpeedPercent = (state, rootElement) => {
  const calcSpeedPercent = state.animationSpeedPercent / 100;
  const calcSpeed = state.fastestAnimationDuration / calcSpeedPercent;
  console.log({ calcSpeedPercent, calcSpeed });
  rootElement.style.setProperty("--animation-play-speed", `${calcSpeed}ms`);
};

export const resetPlayState = (state, rootElement) => {
  const defaultStyle = `
    --animation-play-state: ${state.isPlaying ? "running" : "paused"}; --animation-play-speed: ${
    state.defaultAnimationDuration
  }ms;`.trim();
  rootElement.setAttribute("style", defaultStyle);
};

export const destroyBananas = () => {
  $$(".column").forEach(element => {
    element.innerHTML = "".trim();
  });
};

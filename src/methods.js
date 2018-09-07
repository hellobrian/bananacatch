import { $, $$ } from "./bling";
import { banana } from "./components";

export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const sizes = [30, 40, 50, 60, 70, 75, 80, 85, 90, 95];

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

export const resetPlayState = (state, rootElement) => {
  rootElement.style.setProperty("--animation-play-state", state.isPlaying ? "running" : "paused");
};

export const destroyBananas = () => {
  $$(".column").forEach(element => {
    element.innerHTML = "";
  });
};

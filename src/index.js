import { $, $$ } from "./bling";
import { observer } from "./mutationObserver";
import {
  changeAnimationSpeedPercent,
  destroyBananas,
  getAnimationPlayState,
  insertBanana,
  resetPlayState,
  shouldDisableBananas,
  togglePlayState,
  setScoreInnerHTML,
  setLabelInnerHTML
} from "./methods";

/**
 * State
 */
let intervalId;

const initialState = {
  animationSpeedPercent: 50,
  fastestAnimationDuration: 1500,
  intervalSpeed: 900,
  isPlaying: false,
  score: 0
};

let state = {
  ...initialState,
  defaultAnimationDuration: initialState.fastestAnimationDuration * 2
};

/**
 * Event Handlers
 */
$(".togglePlay").on("click", () => {
  state = { ...state, isPlaying: !state.isPlaying };
  togglePlayState(state, document.documentElement);
  const playState = getAnimationPlayState(document.documentElement);
  shouldDisableBananas(playState, $$(".banana"));

  if (playState === "running") {
    intervalId = setInterval(insertBanana, state.intervalSpeed);
  } else {
    clearInterval(intervalId);
  }
});

$(".reset").on("click", () => {
  state = { ...state, isPlaying: false, score: 0, animationSpeedPercent: 50 };
  setScoreInnerHTML(state);
  setLabelInnerHTML(state.animationSpeedPercent);
  $("#speedPercent").value = state.animationSpeedPercent;

  resetPlayState(state, document.documentElement);
  clearInterval(intervalId);
  destroyBananas();
});

$("#speedPercent").on("change", event => {
  state = { ...state, animationSpeedPercent: event.target.value };
  changeAnimationSpeedPercent(state, document.documentElement);
  setLabelInnerHTML(event.target.value);
});

$("#grid").on("click", event => {
  if (event.target && event.target.matches("button.banana")) {
    /**
     * get points from dataset.points
     * update state
     * display updated score on #score element
     */
    const points = parseInt(event.target.dataset.points, 10);
    state = { ...state, score: state.score + points };
    setScoreInnerHTML(state);
    /**
     * Select span inside banana
     * add exit-animation class to trigger it
     * add animationend event listener to remove banana from DOM
     */
    const span = event.target.querySelector("span");
    span.classList.add("exit-animation");
    span.on("animationend", () => {
      event.target.parentNode.removeChild(event.target);
    });
  }
});

const mutationObserver = observer(state);

mutationObserver.observe($("#grid"), {
  attributes: false,
  childList: true,
  subtree: true
});

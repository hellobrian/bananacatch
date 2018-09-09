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
  setPlayButtonInnerHTML
} from "./methods";

/**
 * State
 */
let intervalId;

const initialState = {
  animationSpeedPercent: 65,
  fastestAnimationDuration: 3000,
  intervalSpeed: 1500,
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
$(".start").on("click", event => {
  event.target.classList.add("pressStart-animation");

  $("#speedPercent").value = state.animationSpeedPercent;
  $(".output").value = state.animationSpeedPercent + "%";

  event.target.addEventListener("animationend", () => {
    state = { ...state, isPlaying: !state.isPlaying };
    togglePlayState(state, document.documentElement);
    $(".start-screen").classList.add("hide");
    const playState = getAnimationPlayState(document.documentElement);
    if (playState === "running") {
      intervalId = setInterval(insertBanana, state.intervalSpeed);
    } else {
      clearInterval(intervalId);
    }
    event.target.parentNode.removeChild(event.target);
  });
});

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
  // setLabelInnerHTML(state.animationSpeedPercent);
  setPlayButtonInnerHTML(state);
  $("#speedPercent").value = state.animationSpeedPercent;

  resetPlayState(state, document.documentElement);
  clearInterval(intervalId);
  destroyBananas();
});

$("#speedPercent").on("change", event => {
  state = { ...state, animationSpeedPercent: event.target.value };
  changeAnimationSpeedPercent(state, document.documentElement);
  // setLabelInnerHTML(event.target.value);
});

$("#speedPercent").on("input", event => {
  $(".output").value = event.target.value + "%";
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

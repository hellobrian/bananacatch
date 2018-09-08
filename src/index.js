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

const mutationObserver = observer(state);

mutationObserver.observe($("#grid"), {
  attributes: false,
  childList: true,
  subtree: true
});

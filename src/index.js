import { $, $$ } from "./bling";
import {
  getAnimationPlayState,
  insertBanana,
  togglePlayState,
  resetPlayState,
  destroyBananas
} from "./methods";

let intervalId;

let state = {
  intervalSpeed: 900,
  isPlaying: false,
  score: 0,
  animationSpeedPercent: 50
};

$(".togglePlay").on("click", () => {
  state = { ...state, isPlaying: !state.isPlaying };
  togglePlayState(state, document.documentElement);

  const playState = getAnimationPlayState(document.documentElement);

  if (playState === "running") {
    intervalId = setInterval(insertBanana, state.intervalSpeed);
    $$(".banana").forEach(element => {
      element.disabled = false;
    });
  } else {
    $$(".banana").forEach(element => {
      element.disabled = true;
    });
    clearInterval(intervalId);
  }
});

$(".reset").on("click", () => {
  state = { ...state, isPlaying: false, score: 0 };
  $("#score").innerHTML = state.score;
  resetPlayState(state, document.documentElement);
  clearInterval(intervalId);
  destroyBananas();
});

$("#speedPercent").on("change", event => {
  console.log(event.target.value);
});

const observer = new MutationObserver(mutationsList => {
  for (let mutation of mutationsList) {
    if (mutation.type == "childList") {
      /**
       * bananaNode (Array) is a newly added banana HTML string from components.js
       * - When a childList mutation is observed, filter all addedNodes for any node with dataset.points.
       */

      // console.log([...mutation.addedNodes]);
      const bananaNode = [...mutation.addedNodes].filter(
        node => node.dataset && node.dataset.points > 0
      );

      /**
       * If a bananaNode exists:
       * - add a click handler to handle adding points to state.score
       * - clicking on a banana will also remove it from the DOM
       */
      if (bananaNode && bananaNode.length > 0) {
        const banana = bananaNode[0];
        banana.addEventListener("click", event => {
          /**
           * get points from dataset.points
           * update state
           * display updated score on #score element
           */
          const points = parseInt(event.target.dataset.points, 10);
          state = { ...state, score: state.score + points };
          $("#score").innerHTML = state.score;

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
        });

        /**
         * When a banana is added to the DOM, the slideDown-animation class is quickly removed and added to trigger the animation to start
         */
        banana.classList.remove("slideDown-animation");
        banana.classList.add("slideDown-animation");

        /**
         * If the animation is not clicked, then the banana will remove itself from the DOM on animationend event based on slideDown-animation ending.
         */
        banana.addEventListener("animationend", event => {
          event.target.parentNode.removeChild(event.target);
        });
      }
    }

    if (mutation.type == "attributes" && mutation.attributeName == "style") {
      /**
       * Change togglePlay button to say "Pause" or "Start" based on state.isPlaying
       */
      $(".togglePlay").innerHTML = state.isPlaying ? "Pause" : "Start";
    }
  }
});

observer.observe($("#html"), {
  attributes: true,
  childList: true,
  subtree: true
});

import { $ } from "./bling";
import {
  getAnimationPlayState,
  insertBanana,
  togglePlayState,
  resetPlayState,
  destroyBananas
} from "./methods";

let intervalId;

let state = {
  isPlaying: false,
  intervalSpeed: 900
};

$(".togglePlay").on("click", () => {
  state = { ...state, isPlaying: !state.isPlaying };
  togglePlayState(state, document.documentElement);

  const playState = getAnimationPlayState(document.documentElement);

  if (playState === "running") {
    intervalId = setInterval(insertBanana, state.intervalSpeed);
  } else {
    clearInterval(intervalId);
  }
});

$(".reset").on("click", () => {
  state = { ...state, isPlaying: false };
  resetPlayState(state, document.documentElement);
  clearInterval(intervalId);
  destroyBananas();
});

const observer = new MutationObserver(mutationsList => {
  for (let mutation of mutationsList) {
    if (mutation.type == "childList") {
      const bananaNode = [...mutation.addedNodes].filter(node => node.innerText === "🍌");

      if (bananaNode && bananaNode.length > 0) {
        const banana = bananaNode[0];
        banana.classList.remove("animation");
        banana.classList.add("animation");
        banana.addEventListener("animationend", event => {
          event.target.parentNode.removeChild(event.target);
        });
      }
    }

    if (mutation.type == "attributes" && mutation.attributeName == "style") {
      // Change togglePlay button to say Paused or Start based on state
      $(".togglePlay").innerHTML = state.isPlaying ? "Pause" : "Start";
    }
  }
});

observer.observe($("#html"), {
  attributes: true,
  childList: true,
  subtree: true
});

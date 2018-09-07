import { $, $$ } from "./bling";
import { banana } from "./components";
import { randomNumber, randomSize } from "./utils";

let intervalId;
let state = {
  isPlaying: false,
  intervalSpeed: 900
};

const getAnimationPlayState = () =>
  getComputedStyle(document.documentElement)
    .getPropertyValue("--animation-play-state")
    .trim();

const insertBanana = () => {
  let id = randomNumber(1, 5);
  let fontSize = randomSize();
  console.log({ id, fontSize });
  $(`#column-${id}`).insertAdjacentHTML("afterbegin", banana(fontSize));
};

const destroyBananas = () => {
  $$(".column").forEach(element => {
    element.innerHTML = "";
  });
};

$(".togglePlay").on("click", () => {
  state = { isPlaying: !state.isPlaying, intervalSpeed: state.intervalSpeed };

  document.documentElement.style.setProperty(
    "--animation-play-state",
    state.isPlaying ? "running" : "paused"
  );

  const playState = getAnimationPlayState();

  if (playState === "running") {
    intervalId = setInterval(insertBanana, state.intervalSpeed);
  } else {
    clearInterval(intervalId);
  }
});

$(".reset").on("click", () => {
  clearInterval(intervalId);
  destroyBananas();
});

// MUTATION OBSERVER
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

    if (mutation.type == "attributes") {
      // Change togglePlay button to say Paused or Start based on state
      $(".togglePlay").innerHTML = state.isPlaying ? "Paused" : "Start";
    }
  }
});

observer.observe($("#html"), {
  attributes: true,
  childList: true,
  subtree: true
});

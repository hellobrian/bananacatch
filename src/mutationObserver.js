/**
 * Mutation Observer
 */
export const observer = state =>
  new MutationObserver(mutationsList => {
    for (let mutation of mutationsList) {
      if (mutation.type == "childList") {
        /**
         * bananaNode (Array) is a newly added banana HTML string from components.js
         * - When a childList mutation is observed, filter all addedNodes for any node with dataset.points.
         */
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
    }
  });

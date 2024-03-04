// Select the node that will be observed for mutations
var targetNode = document.body; // You can choose a more specific parent element if it's available
const elementSelector = 'button[data-testid="platform-board-kit.ui.swimlane.link-button"]';

// Options for the observer (which mutations to observe)
var config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
var callback = function(mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const foundElements = document.querySelectorAll(elementSelector);
            if (foundElements.length > 0) {
                applyStyles();
            }
        }
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

function applyStyles() {
  var elements = document.querySelectorAll(elementSelector);
  elements.forEach(function(element) {
      element.style.maxWidth = 'none';
  });
}

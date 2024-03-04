// Select the node that will be observed for mutations
var targetNode = document.body;
const elementSelector = 'button[data-testid="platform-board-kit.ui.swimlane.link-button"]';

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

var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
var config = { childList: true, subtree: true };
observer.observe(targetNode, config);

function applyStyles() {
  var elements = document.querySelectorAll(elementSelector);
  elements.forEach(function(element) {
      element.style.maxWidth = 'none';
  });
}

// Select the node that will be observed for mutations
var targetNode = document.body; // You can choose a more specific parent element if it's available

// Options for the observer (which mutations to observe)
var config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
var callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(var mutation of mutationsList) {
        if (mutation.type === 'childList') {
            var foundElements = document.querySelectorAll('button[data-testid="platform-board-kit.ui.swimlane.link-button"]');
            if (foundElements.length > 0) {
                applyStyles();
                // Optionally: Stop observing after the first match
                observer.disconnect();
                break;
            }
        }
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

function applyStyles() {
  var elements = document.querySelectorAll('button[data-testid="platform-board-kit.ui.swimlane.link-button"]');
  elements.forEach(function(element) {
      element.style.maxWidth = 'none';
  });
}
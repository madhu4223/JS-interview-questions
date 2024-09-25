// Event bubbling is a phenomenon in JavaScript where an event triggered on a child element will also trigger on its 
// parent elements, propagating up through the DOM hierarchy until it reaches the root of the document. 
// This propagation of events from the target element to its ancestors is known as event bubbling.

// When an event occurs on an element, such as a click event on a button, the browser first triggers the event handlers attached to the target element. 
// Then, if the event has not been explicitly stopped (e.g., using event.stopPropagation()), the event bubbles up through the ancestors of the target element, triggering their event handlers as well.
const elementsToFade = document.querySelectorAll('.fade-element');
// Function to calculate opacity based on scroll position
function calculateOpacity(scrollPosition, windowHeight) {
  const distanceFromTop = scrollPosition - windowHeight;
  const maxScrollDistance = windowHeight * 0.5; // Adjust this value for desired fade effect

  if (distanceFromTop < 0) {
    return 1; // Fully opaque when above the viewport
  } else if (distanceFromTop > maxScrollDistance) {
    return 0; // Fully transparent when below the fade threshold
  } else {
    return 1 - (distanceFromTop / maxScrollDistance); // Linear opacity calculation
  }
}

// Function to update the opacity of elements
function updateOpacity() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;

  elementsToFade.forEach(element => {
    const opacity = calculateOpacity(scrollPosition, windowHeight);
    element.style.opacity = opacity;
  });
}

// Event listener for scroll event
window.addEventListener('scroll', updateOpacity);

// Cleanup function when you want to stop the fade effect
function stopFadeEffect() {
  window.removeEventListener('scroll', updateOpacity);
}

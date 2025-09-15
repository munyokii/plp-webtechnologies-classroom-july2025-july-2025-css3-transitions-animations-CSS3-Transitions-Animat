// Global variable (Global Scope)
let animationCount = 0;

/**
 * Function with parameters and return value
 * @param {string} type - Animation type ('bounce' or 'spin')
 * @returns {number} Animation duration in milliseconds
 */
function triggerAnimation(type) {
  const box = document.getElementById('animationBox');

  // Local variable (Function Scope)
  const duration = calculateDuration(type);
  animationCount++; // Access global variable

  // Remove existing animation
  box.className = 'animation-box';

  setTimeout(() => {
    box.classList.add(`animate-${type}`);
  }, 50);

  setTimeout(() => {
    box.className = 'animation-box';
  }, duration);

  return duration;
}

/**
 * Helper function that returns calculated values
 * @param {string} animationType - Type of animation
 * @returns {number} Duration in milliseconds
 */
function calculateDuration(animationType) {
  const baseDuration = 600;

  switch (animationType) {
    case 'bounce':
      return baseDuration;
    case 'spin':
      return baseDuration + 400;
    default:
      return baseDuration;
  }
}

/**
 * Function demonstrating variable scope
 */
function demonstrateScope() {
  const output = document.getElementById('scopeOutput');

  // Local variable (Function Scope)
  let localMessage = 'This is a local variable';

  // Block scope demonstration
  if (true) {
    let blockVariable = 'Block-scoped variable';
    // blockVariable only exists within these braces
  }

  // Function that returns scope information
  function getScopeInfo() {
    return {
      global: `Global count: ${animationCount}`,
      local: localMessage
    };
  }

  const info = getScopeInfo();

  output.innerHTML = `
                <h4>Variable Scope Demo:</h4>
                <p><strong>Global:</strong> ${info.global}</p>
                <p><strong>Local:</strong> ${info.local}</p>
                <p><em>Block variables exist only within { } braces</em></p>
            `;
  output.style.display = 'block';
}

/**
 * Toggle card flip by adding/removing CSS class
 */
function toggleCardFlip() {
  const card = document.getElementById('flipCard');
  card.classList.toggle('flipped');
}

/**
 * Show modal with CSS transition
 */
function showModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';

  // Trigger animation
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
}

/**
 * Hide modal with smooth transition
 */
function hideModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('show');

  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

// Initializing - Add click event to animation box
document.addEventListener('DOMContentLoaded', function () {
  const box = document.getElementById('animationBox');
  box.addEventListener('click', function () {
    const animations = ['bounce', 'spin'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    triggerAnimation(randomAnimation);
  });
});
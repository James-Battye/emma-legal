let imageWrapper = document.querySelector('.ba-slider_image_wrapper');
let wrapperWidth = imageWrapper.getBoundingClientRect().width;

document.querySelectorAll('.ba-slider_overlay_wrap').forEach((e) => {
  e.style.width = `${wrapperWidth}px`;
});

function handleMove(e) {
  // Get the correct X position whether it's a touch or mouse event
  const clientX = e.type?.includes('touch') ? e.touches[0].clientX : e.clientX;
  const rect = imageWrapper.getBoundingClientRect();

  // Calculate raw position and clamp it
  const rawX = clientX - rect.left;
  const clampedX = gsap.utils.clamp(0, rect.width, rawX);

  // Convert to percentage
  const percent = gsap.utils.mapRange(0, rect.width, 0, 100, clampedX);

  // Map the bar position
  const barLocation = gsap.utils.mapRange(0, 100, 0, wrapperWidth, percent);

  let duration = 0.2;
  let ease = 'ease';

  gsap.to('.ba-slider_image_crop', {
    width: `${percent}%`,
    ease,
    duration,
  });

  gsap.to('.ba-slider_bar_wrap', {
    x: barLocation,
    ease,
    duration,
  });
}

function getWidth(e) {
  // Get the element's position and dimensions
  const rect = imageWrapper.getBoundingClientRect();

  // Get the correct X position whether it's a touch or mouse event
  const clientX = e.type?.includes('touch') ? e.touches[0].clientX : e.clientX;

  // Calculate the mouse position relative to the element
  let x = clientX - rect.left;

  // Clamp the value between 0 and rect.width
  x = Math.max(0, Math.min(x, rect.width));

  // Calculate the percentage (0 to 1)
  const percentage = x / rect.width;

  return percentage;
}

// Add both mouse and touch event listeners
imageWrapper.addEventListener('mousemove', handleMove);
imageWrapper.addEventListener('touchmove', handleMove);

// let imageWrapper = document.querySelector('.ba-slider_image_wrapper');
// let wrapperWidth = imageWrapper.getBoundingClientRect().width;

// document.querySelectorAll('.ba-slider_overlay_wrap').forEach((e) => {
//   e.style.width = `${wrapperWidth}px`;
// });

// gsap.set('.ba-slider_points_wrap.is-behind .ba-slider_points_item', {
//   opacity: 0,
// });

// function handleMove(e) {
//   let positive = gsap.utils.selector('.ba-slider_points_wrap.is-behind');
//   let negative = gsap.utils.selector('.ba-slider_points_wrap:not(.is-behind)');
//   // Get the correct X position whether it's a touch or mouse event
//   const clientX = e.type?.includes('touch') ? e.touches[0].clientX : e.clientX;
//   const rect = imageWrapper.getBoundingClientRect();

//   // Calculate raw position and clamp it
//   const rawX = clientX - rect.left - 16;

//   const clampedX = gsap.utils.clamp(0, rect.width, rawX);

//   // Convert to percentage
//   const percent = gsap.utils.mapRange(0, rect.width, 5, 100, clampedX);

//   // Map the bar position
//   const barLocation = gsap.utils.mapRange(0, 100, 0, wrapperWidth, percent);

//   let duration = 0.2;
//   let ease = 'ease';

//   gsap.to('.ba-slider_image_crop', {
//     width: `${percent}%`,
//     ease,
//     duration,
//   });

//   gsap.to('.ba-slider_bar_wrap', {
//     x: barLocation,
//     ease,
//     duration,
//   });

//   const positiveItems = positive('.ba-slider_points_item');
//   const negativeItems = negative('.ba-slider_points_item');

//   positiveItems.forEach((item) => {
//     gsap.set(item, { opacity: 0 });
//   });

//   positiveItems.forEach((item, index) => {
//     gsap.to(item, {
//       opacity: percent > index * 25 + 5 ? 1 : 0,
//       duration: 0.2,
//       ease: 'ease',
//     });
//   });

//   negativeItems.forEach((item, index) => {
//     gsap.to(item, {
//       opacity: percent <= index * 25 + 5 ? 1 : 0,
//       duration: 0.2,
//       ease: 'ease',
//     });
//   });
// }

// function getWidth(e) {
//   // Get the element's position and dimensions
//   const rect = imageWrapper.getBoundingClientRect();

//   // Get the correct X position whether it's a touch or mouse event
//   const clientX = e.type?.includes('touch') ? e.touches[0].clientX : e.clientX;

//   // Calculate the mouse position relative to the element
//   let x = clientX - rect.left;

//   // Clamp the value between 0 and rect.width
//   x = Math.max(0, Math.min(x, rect.width));

//   // Calculate the percentage (0 to 1)
//   const percentage = x / rect.width;

//   return percentage;
// }

// document.addEventListener('DOMContentLoaded', () => {
//   // Add both mouse and touch event listeners
//   imageWrapper.addEventListener('mousemove', handleMove);
//   imageWrapper.addEventListener('touchmove', handleMove);
// });

// let stickyWrapper = document.querySelector('.cih_sticky_wrap');
// let sectionContainer = document.querySelector('.cih_container');

// const video = sectionContainer.querySelector('video');
// const btnWrap = document.querySelector('.cih_video_btn_clickable');

// btnWrap.addEventListener('click', () => {
//   video.muted = false;
//   video.controls = true;
//   video.play();
//   gsap.to('.cih_video_btn_wrap', {
//     autoAlpha: 0,
//   });
//   gsap.to(sectionContainer.querySelectorAll('.g_visual_overlay'), {
//     autoAlpha: 0,
//   });
// });

// video.pause();

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: stickyWrapper,
//     start: 'top top',
//     end: '+=400',
//     scrub: true,
//     onUpdate: () => {
//       video.controls = false;
//     },
//   },
// });

// tl.to(sectionContainer, {
//   maxWidth: '100vw',
//   width: '100vw',
//   height: '100%',
//   borderRadius: '0rem',
//   onComplete: function () {
//     sectionContainer.querySelector('video').play();
//   },
// });

// tl.to(
//   '.cih_sticky_item',
//   {
//     paddingTop: '0rem',
//   },
//   0
// );

// tl.to(
//   '.cih_grid',
//   {
//     opacity: 0,
//     y: 20,
//   },
//   0
// );

// tl.from(
//   '.cih_video_btn_wrap',
//   {
//     autoAlpha: 0,
//   },
//   0
// );

// tl.to(sectionContainer.querySelectorAll('.g_visual_overlay'), {
//   autoAlpha: 1,
// });

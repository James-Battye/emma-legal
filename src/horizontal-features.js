// window.addEventListener('load', () => {
//   if (window.innerWidth < 991) return;
//   let wrap = document.querySelector('.hf_pin_wrap');
//   let items = wrap.querySelectorAll('.hf_item_wrap');

//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: wrap,
//       start: 'center center',
//       end: `+=${items.length * 250}`,
//       scrub: true,
//       pin: true,
//       pinSpacing: true,
//     },
//   });

//   tl.to(items, {
//     xPercent: (items.length - 1) * -50,
//   });
// });

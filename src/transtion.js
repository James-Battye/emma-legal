// document.addEventListener('DOMContentLoaded', () => {
//   // Start

//   gsap.registerPlugin(ScrollTrigger);

//   const pairs = Array.from(document.querySelectorAll('[data-theme]')).reduce((acc, el) => {
//     const key = el.dataset.theme;
//     if (!acc[key]) acc[key] = [];
//     acc[key].push(el);
//     return acc;
//   }, {});

//   Object.keys(pairs).forEach((key) => {
//     if (!key.startsWith('start')) return;

//     const startTrigger = pairs[key][0];
//     const endKey = key.replace('start', 'end');
//     const endTrigger = pairs[endKey] ? pairs[endKey][0] : document.body;

//     gsap.timeline({
//       scrollTrigger: {
//         trigger: startTrigger,
//         endTrigger: endTrigger,
//         start: 'top center',
//         end: 'bottom bottom',
//         scrub: true,
//         toggleClass: {
//           targets: 'body',
//           className: 'u-theme-dark',
//         },
//       },
//     });
//   });

//   // End
// });

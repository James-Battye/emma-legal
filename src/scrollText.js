// document.addEventListener('DOMContentLoaded', () => {
//   if (window.innerWidth < 991) return;
//   let wraps = document.querySelectorAll('.scroll-text_wrap');

//   wraps.forEach(animateText);

//   function animateText(wrap) {
//     if (wrap.getAttribute('animated') === 'true') return;
//     let wrapSelector = gsap.utils.selector(wrap);
//     let text = wrapSelector('.scroll-text_scroll_text');
//     let textContain = wrapSelector('.scroll-text_grid');

//     let split = new SplitType(text, { types: 'lines, words, chars' });

//     gsap.set(wrapSelector('.char'), {
//       color: 'rgba(10, 19, 25, 0.2)',
//     });

//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: textContain,
//         start: 'center center',
//         end: `+=${split.lines.length * 65}`,
//         scrub: true,
//         markers: true,
//         pin: true,
//         pinSpacing: true,
//       },
//     });

//     tl.to(wrapSelector('.char'), {
//       keyframes: {
//         color: ['rgba(10, 19, 25, 0.2)', 'rgba(109, 145, 211, 1)', 'rgba(5, 22, 64, 1)'],
//       },
//       stagger: {
//         each: 0.01,
//       },
//     });

//     wrap.setAttribute('animated', 'true');
//   }
// });

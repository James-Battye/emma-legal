document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.timeline({
    scrollTrigger: {
      trigger: '[data-theme="start"]',
      endTrigger: '[data-theme="end"]',
      start: 'top center',
      end: 'bottom bottom',
      scrub: true,
      toggleClass: {
        targets: 'body',
        className: 'u-theme-dark',
      },
    },
  });
});

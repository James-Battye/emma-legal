document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 991) return
  gsap.registerPlugin(ScrollTrigger);

  let width = document.querySelector('.nav_container.u-container').getBoundingClientRect().width

  const tl = gsap.timeline({
    paused: true,
    onUpdate: () => {
      console.log(width);
    },
    scrollTrigger: {
      trigger: '.page_wrap',
      start: "top top",
      end: "top+=20 top",
      toggleActions: "none play reverse none",
      markers: true
    }
  });

  tl.to('.nav_wrap', {
    maxWidth: `${width}px`,
    borderRadius: 1000,
    y: 12,
  })
  tl.to('.nav_container', {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '2rem',
    paddingRight: '0.5rem',
  }, 0)
  tl.to('.nav_wrap', {
    duration: 0.2,
    border: '1px solid rgba(10, 19, 25, 0.10)',
  })
});
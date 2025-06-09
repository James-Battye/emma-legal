document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 991) return

  let menuButton = document.querySelector('.nav_menu_wrap');
  let toggle = false;

  let tl = gsap.timeline({ paused: true });

  tl.to('.nav_links_wrap', {
    opacity: toggle ? 0 : 1,
    pointerEvents: toggle ? 'none' : 'auto',
  });
  tl.from('.nav_link_text', {
    yPercent: 100,
    opacity: 0,
    stagger: 0.1
  }, "<+=0.3")
  tl.from('.nav_link_svg', {
    opacity: 0,
    stagger: 0.1
  }, "<+=0.3")


  menuButton.addEventListener('click', () => {
    if (toggle) {
      tl.reverse();
    } else {
      tl.play();
    }
    toggle = !toggle;
  });

});


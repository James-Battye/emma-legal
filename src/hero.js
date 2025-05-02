let stickyWrapper = document.querySelector('.cih_sticky_wrap');
let sectionContainer = document.querySelector('.cih_container');

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: stickyWrapper,
    start: 'top top',
    end: '+=400',
    scrub: true,
  },
});

tl.to(sectionContainer, {
  maxWidth: '100vw',
  width: '100vw',
  height: '100%',
  borderRadius: '0rem',
});

tl.to(
  '.cih_sticky_item',
  {
    paddingTop: '0rem',
  },
  0
);

tl.to(
  '.cih_grid',
  {
    opacity: 0,
    y: 20,
  },
  0
);

tl.from(
  '.g_visual_video',
  {
    opacity: 0,
    attr: {
      controls: 'false',
    },
  },
  0
);

tl.from(
  '.cih_video_btn_wrap',
  {
    opacity: 0,
  },
  0
);

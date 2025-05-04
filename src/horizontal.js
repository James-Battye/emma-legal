let cardItems = document.querySelectorAll('.horizontal_cards_item');
let pills = document.querySelectorAll('.horizontal_timeline_pill:not(:first-child)');

gsap.registerPlugin(ScrollTrigger);

let horizontalScroll = gsap.timeline({
  scrollTrigger: {
    trigger: '.horizontal_container',
    start: 'top 7%',
    pin: true,
    pinSpacing: true,
    end: `+=${(cardItems.length - 1) * 600}`,
    markers: false,
    scrub: true,
    anticipatePin: 1,
  },
  defaults: {
    ease: 'none',
  },
});

horizontalScroll.to(
  cardItems,
  {
    xPercent: (cardItems.length - 1) * -100,
    duration: pills.length - 0.2,
  },
  0
);

let pillTl = gsap.timeline();

pills.forEach((e) => {
  let pill = gsap.utils.selector(e);
  pillTl.to(pill(':not(.horizontal_timeline_connector).pill_bg:not(.is-first)'), {
    opacity: 1,
  });
  pillTl.to(
    pill('.pill_wrap'),
    {
      color: 'white',
    },
    '<'
  );
  pillTl.to(pill('.horizontal_timeline_connector .pill_bg'), {
    opacity: 1,
  });
});

horizontalScroll.add(pillTl, 0);

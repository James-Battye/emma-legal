let cardItems = document.querySelectorAll('.horizontal_cards_item');

gsap.registerPlugin(ScrollTrigger);

console.log(document.querySelectorAll('.horizontal_wrap'));

let horizontalScroll = gsap.timeline({
  ScrollTrigger: {
    trigger: '.horizontal_wrap',
    start: 'bottom bottom',
    pin: true,
    pinSpacing: true,
    end: '+=5000',
    markers: true,
    scrub: true,
  },
});

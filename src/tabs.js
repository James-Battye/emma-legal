document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 991) return;

  const wrappers = document.querySelectorAll('.tabs_item');
  const offset = 48;
  const tabHeights = [];

  // 1) Measure and initialize all tabs to "collapsed"
  wrappers.forEach((wrap, i) => {
    const heading = wrap.querySelector('.tabs_heading');
    const border = wrap.querySelector('.tabs_border_wrap');
    const img = wrap.querySelector('.tabs_image');
    const line = wrap.querySelector('.tabs_line');

    const headingH = heading.getBoundingClientRect().height;
    const fullH = border.getBoundingClientRect().height;
    tabHeights[i] = { collapsed: headingH + offset, expanded: fullH };

    gsap.set(border, { maxHeight: tabHeights[i].collapsed + 'px', paddingBottom: '0.5rem', opacity: 0.2 });
    gsap.set(img, { opacity: 0 });
    gsap.set(line, { height: '0%' });
    gsap.set(wrap.querySelectorAll('.tabs_p'), { scale: 0.7, opacity: 0 });
  });

  // 2) Open the first tab
  gsap.set(wrappers[0].querySelector('.tabs_border_wrap'), { maxHeight: tabHeights[0].expanded + 'px', opacity: 1 });
  gsap.set(wrappers[0].querySelector('.tabs_image'), { opacity: 1 });
  gsap.set(wrappers[0].querySelector('.tabs_line'), { height: '100%' });
  gsap.set(wrappers[0].querySelectorAll('.tabs_heading, .tabs_p'), { scale: 1, opacity: 1 });

  // 3) Build scroll-driven timeline
  const totalScroll = wrappers.length * 200; // adjust per-tab scroll distance
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.tabs_wrap',
      start: 'center 52%',
      end: `+=${totalScroll}`,
      scrub: true,
      pin: true,
      pinSpacing: true,
    }
  });

  wrappers.forEach((wrap, i) => {
    if (i === 0) return; // skip first

    const prev = wrappers[i - 1];
    const curr = wrap;

    tl.to(prev.querySelector('.tabs_border_wrap'), {
      maxHeight: tabHeights[i - 1].collapsed + 'px',
      paddingBottom: '0.5rem',
      opacity: 0.2
    }, '>')
      .to(prev.querySelector('.tabs_image'), { opacity: 0 }, '<')
      .to(prev.querySelector('.tabs_line'), { height: '0%' }, '<')
      .to(prev.querySelectorAll('.tabs_p'), { scale: 0.7, opacity: 0 }, '<')

      .to(curr.querySelector('.tabs_border_wrap'), {
        maxHeight: tabHeights[i].expanded + 'px',
        opacity: 1
      }, '<')
      .to(curr.querySelector('.tabs_image'), { opacity: 1 }, '<')
      .to(curr.querySelector('.tabs_line'), { height: '100%' }, '<')
      .to(curr.querySelectorAll('.tabs_heading, .tabs_p'), { scale: 1, opacity: 1 }, '<');
  });
});
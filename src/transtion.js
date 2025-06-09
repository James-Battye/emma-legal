window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Get all elements with data-theme, in DOM order
  const themeEls = Array.from(document.querySelectorAll('[data-theme]'));

  // 2. Loop through, looking for 'start's
  themeEls.forEach((el, i) => {
    const theme = el.dataset.theme;
    if (!theme.startsWith('start')) return;

    const endKey = theme.replace('start', 'end');
    let foundEnd = null;
    let errorFound = false;

    // 3. Look ahead for next 'end' (if any)
    for (let j = i + 1; j < themeEls.length; j++) {
      const nextTheme = themeEls[j].dataset.theme;
      if (nextTheme.startsWith('start')) {
        // ERROR: Two starts in a row (log it)
        console.error(
          `[Dark Mode] Found consecutive start triggers: "${theme}" at index ${i} and "${nextTheme}" at index ${j}. This is not allowed.`
        );
        errorFound = true;
        // Continue searching for the next 'end'
      }
      if (nextTheme === endKey) {
        foundEnd = themeEls[j];
        break;
      }
    }

    // 4. Set up the ScrollTrigger config
    let scrollTriggerConfig = {
      trigger: el,
      start: 'top center',
      scrub: true,
      toggleClass: {
        targets: 'body',
        className: 'u-theme-dark',
      },
    };

    if (foundEnd) {
      scrollTriggerConfig.endTrigger = foundEnd;
      scrollTriggerConfig.end = 'bottom bottom';
    } else {
      // No end found: extend to bottom of page
      scrollTriggerConfig.end = '+=99999';
      if (!errorFound) {
        // Only warn if this wasn't already logged as a double-start error
        console.warn(
          `[Dark Mode] No end trigger found for start "${theme}" at index ${i}. Dark mode will persist until end of page.`
        );
      }
    }

    gsap.timeline({
      scrollTrigger: scrollTriggerConfig,
    });
  });
});

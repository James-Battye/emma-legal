const tabItems = document.querySelectorAll('.tabs_item');
let activeIndex = null; // No tab active initially

// Set all tabs to closed state
function setTabClosed(tab, idx) {
  const p = tab.querySelector('.tabs_p');
  const border = tab.querySelector('.tabs_border_wrap');
  const image = tab.querySelector('.tabs_image');
  console.log(`Setting tab ${idx} to closed state`, { p, border, image });
  gsap.set(p, { height: '0rem', paddingTop: '0rem' });
  gsap.set(border, { paddingBottom: '0.5rem' });
  gsap.set(image, { opacity: 0 });
}

tabItems.forEach((tab, idx) => setTabClosed(tab, idx));

console.log('Tab items:', tabItems);

tabItems.forEach((tab, index) => {
  console.log(`Adding click listener to tab ${index}`);
  tab.addEventListener('click', () => {
    console.log(`Tab ${index} clicked`, tab);
    if (activeIndex === index) {
      console.log(`Tab ${index} is already active.`);
      return; // Already active
    }

    // Animate out the currently active tab, if any
    if (activeIndex !== null) {
      const prevTab = tabItems[activeIndex];
      const prevP = prevTab.querySelector('.tabs_p');
      const prevBorder = prevTab.querySelector('.tabs_border_wrap');
      const prevImage = prevTab.querySelector('.tabs_image');
      console.log(`Animating out previous tab ${activeIndex}`, { prevP, prevBorder, prevImage });
      gsap
        .timeline({ defaults: { duration: 0.4, ease: 'power2.inOut' } })
        .to(prevImage, { opacity: 0 })
        .to(prevBorder, { paddingBottom: '0.5rem' }, '<')
        .to(prevP, { height: '0rem', paddingTop: '0rem' }, '<');
    }

    // Animate in the clicked tab with a staggered effect
    const p = tab.querySelector('.tabs_p');
    const border = tab.querySelector('.tabs_border_wrap');
    const image = tab.querySelector('.tabs_image');
    console.log(`Animating in tab ${index}`, { p, border, image });
    gsap
      .timeline({ defaults: { duration: 0.4, ease: 'power2.out' } })
      .to(p, { height: 'auto', paddingTop: '0.5rem' })
      .to(border, { paddingBottom: '1rem' }, '-=0.2')
      .to(image, { opacity: 1 }, '-=0.2');

    activeIndex = index;
    console.log(`Active index set to ${activeIndex}`);
  });
});

tabItems[0].click();

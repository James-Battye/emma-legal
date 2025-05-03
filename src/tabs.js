document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 991) return;

  const tabItems = document.querySelectorAll('.tabs_item');
  let activeIndex = null;
  let tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'power2.out' } });
  let offset = 48;

  let tabData = {};

  function getElements(tab) {
    let elements = {
      border: tab.querySelector('.tabs_border_wrap'),
      image: tab.querySelector('.tabs_image'),
      line: tab.querySelector('.tabs_line'),
      heading: tab.querySelector('.tabs_heading'),
    };

    return elements;
  }

  function getData(tab, index) {
    let elements = getElements(tab);

    let headingHeight = elements.heading.getBoundingClientRect().height;
    let containerHeight = elements.border.getBoundingClientRect().height;

    tabData[index] = {
      headingHeight,
      containerHeight,
    };
  }

  tabItems.forEach((e, i) => {
    getData(e, i);
  });

  // Set all tabs to closed state
  function setTabClosed(tab, index) {
    let elements = getElements(tab);

    gsap.to(elements.border, {
      maxHeight: `${tabData[index].headingHeight + offset}px`,
      paddingBottom: '0.5rem',
      opacity: 0.2,
    });
    gsap.to(elements.image, { opacity: 0 });
    gsap.to(elements.line, { opacity: 0 });
  }

  tabItems.forEach((tab, idx) => setTabClosed(tab, idx));

  tabItems.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      if (activeIndex === index) {
        return; // Already active
      }

      // Animate out the currently active tab, if any
      if (activeIndex !== null) {
        let prevElement = getElements(tabItems[activeIndex]);

        gsap
          .timeline({ defaults: { duration: 0.6, ease: 'power2.inOut' } })
          .to(prevElement.image, { opacity: 0 }, 0)
          .to(
            prevElement.border,
            {
              maxHeight: `${tabData[activeIndex].headingHeight + offset}px`,
              paddingBottom: '0.5rem',
              opacity: 0.2,
            },
            0
          )
          .to(prevElement.line, { opacity: 0 }, 0);
      }

      let elements = getElements(tab);
      let headingBottom = elements.heading.getBoundingClientRect().bottom;
      let borderTop = elements.border.getBoundingClientRect().top;
      let initialHeight = headingBottom - borderTop + 16; // 1rem = 16px

      console.log(initialHeight);
      // Animate in the clicked tab with a staggered effect
      tl.to(elements.border, { maxHeight: `${tabData[index].containerHeight}px`, opacity: 1 })
        .to(elements.image, { opacity: 1 }, '-=0.2')
        .to(elements.line, { opacity: 1 }, '<');

      // Cancel previous loop if user clicks
      if (tl.loopTween) {
        tl.loopTween.kill();
        tl.loopTween = null;
      }

      tl.loopTween = gsap.fromTo(
        elements.line,
        { backgroundPositionY: `${-tabData[index].containerHeight * 2}px` },
        {
          backgroundPositionY: `${-tabData[index].containerHeight / 1.8}px`,
          duration: 6,
          ease: 'linear',
          // onComplete: function () {
          //   if (activeIndex === index) {
          //     if (tab.nextElementSibling) {
          //       tab.nextElementSibling.click();
          //     } else {
          //       tabItems[0].click();
          //     }
          //   }
          // },
        }
      );

      activeIndex = index;
    });
  });

  tabItems[0].click();
  // document.querySelector('.tabs_item_wrap').style.maxHeight =
  //   document.querySelector('.tabs_item_wrap').getBoundingClientRect().height + 'px';
});

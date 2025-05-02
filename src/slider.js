document.addEventListener("sliderModulesAdded", () => {

  let initialSetup = window.functions.initialSetup
  let resetSlideBG = window.functions.resetSlideBG
  let tlConfig = window.functions.tlConfig

  gsap.registerPlugin(Flip)

  let index = 0
  let slides = document.querySelectorAll('.slider_bg')
  let currentSlide = () => { return gsap.utils.wrap(0, slides.length, index) }
  let isAnimating = false
  let nextSlideWrapper = document.querySelector('.slider_preview_wrap')
  let heading = document.querySelectorAll('.slider_heading')
  let positon = document.querySelectorAll('.slider_author_position')
  let name = document.querySelectorAll('.slider_author_name ')
  let headshots = document.querySelectorAll('.slider_author_img');
  let buttonGroups = document.querySelectorAll('.slider_button_wrap');

  gsap.set(headshots, {
    opacity: 0
  })

  gsap.set(buttonGroups, {
    opacity: 0
  })

  let headingChars = heading[currentSlide()].querySelectorAll('.char')
  let positonChars = positon[currentSlide()].querySelectorAll('.char')
  let nameChars = name[currentSlide()].querySelectorAll('.char')

  initialSetup(currentSlide())

  resetSlideBG(1, nextSlideWrapper)

  function changeSlide() {

    if (isAnimating) return

    isAnimating = true

    gsap.set('.slider_preview_wrap .slider_bg:first-child', {
      borderRadius: '1rem'
    })
    let states = Flip.getState('.slider_preview_wrap .slider_bg:first-child')
    let animationConfig = tlConfig()
    let animateOut = animationConfig.animateOut
    let animateIn = animationConfig.animateIn
    let tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: 'power2.inOut'
      },
      onComplete: () => {
        resetSlideBG(0, nextSlideWrapper);
        isAnimating = false;
      }
    })

    headingChars = heading[currentSlide()].querySelectorAll('.char');
    positonChars = positon[currentSlide()].querySelectorAll('.char');
    nameChars = name[currentSlide()].querySelectorAll('.char');
    let headshot = headshots[currentSlide()]
    let buttons = buttonGroups[currentSlide()]

    // Move element
    document.querySelector('.slider_bg_wrap').append(document.querySelector('.slider_preview_wrap .slider_bg:first-child'))

    gsap.set('.slider_bg_wrap .slider_bg:last-child', {
      borderRadius: '0rem'
    })

    tl.add(Flip.from(states, {
      scale: false,
      absolute: true,
      ease: 'power3.inOut',
      duration: 1.2
    }, 0))


    tl.fromTo('.slider_preview_wrap .slider_bg:first-child', {
      y: '100%'
    }, {
      y: '0%',
      duration: 0.8
    }, 0)


    tl.to(headingChars, animateOut, 0)
    tl.to(positonChars, animateOut, 0)
    tl.to(nameChars, animateOut, 0)
    tl.to(headshot, {
      yPercent: -100,
      opacity: 0
    }, 0)
    tl.to(buttons, {
      opacity: 0
    }, 0)

    index += 1
    headingChars = heading[currentSlide()].querySelectorAll('.char');
    positonChars = positon[currentSlide()].querySelectorAll('.char');
    nameChars = name[currentSlide()].querySelectorAll('.char');
    headshot = headshots[currentSlide()]
    buttons = buttonGroups[currentSlide()]

    tl.fromTo(headingChars, animateIn[0], animateIn[1], 0.7)
    tl.fromTo(positonChars, animateIn[0], animateIn[1], 0.7)
    tl.fromTo(nameChars, animateIn[0], animateIn[1], 0.7)
    tl.fromTo(headshot, {
      yPercent: 100,
      opacity: 0
    }, {
      yPercent: 0,
      opacity: 1
    }, 0.7)
    tl.fromTo(buttons, {
      opacity: 0,
    }, {
      opacity: 1
    }, 0.7)

  }

  gsap.set('.slider_preview_wrap .slider_bg:first-child', {
    borderRadius: '1rem'
  })

  let previewClick = document.querySelector('.slider_clickable');

  previewClick.addEventListener('click', changeSlide)
  previewClick.click()


});
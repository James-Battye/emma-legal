function resetSlideBG(condition = 0, nextSlideWrapper) {
  let slidesToMove = document.querySelectorAll('.slider_bg_wrap .slider_bg')
  slidesToMove.forEach((e, i) => {
    if (condition === 0 ? i !== 0 : i === 0) return

    nextSlideWrapper.append(e)
    gsap.set(e, {
      y: i === 1 ? '0%' : '100%'
    })
  })
}


function initialSetup(currentSlide) {
  let elementsToSplit = document.querySelectorAll('.slider_heading, .slider_author_position, .slider_author_name');
  let heading = document.querySelectorAll('.slider_heading');
  let positon = document.querySelectorAll('.slider_author_position');
  let name = document.querySelectorAll('.slider_author_name ');

  new SplitType(elementsToSplit, { types: 'lines,chars' })
  let headingChars = heading[currentSlide].querySelectorAll('.char');
  let positonChars = positon[currentSlide].querySelectorAll('.char');
  let nameChars = name[currentSlide].querySelectorAll('.char');


  gsap.set('.line', {
    overflow: 'hidden'
  })
  gsap.set('.char', {
    y: '100%'
  })
  gsap.set(headingChars, {
    y: '0%'
  })
  gsap.set(positonChars, {
    y: '0%'
  })
  gsap.set(nameChars, {
    y: '0%'
  })
}

function tlConfig() {
  return {
    animateOut: {
      y: '-100%',
      stagger: {
        amount: 0.1
      }
    },

    animateIn: [
      {
        y: '100%'
      },
      {
        y: '0%',
        stagger: {
          amount: 0.1
        }
      }
    ]
  }
}

window.functions = window.functions || {}

window.functions.initialSetup = initialSetup
window.functions.resetSlideBG = resetSlideBG
window.functions.tlConfig = tlConfig

document.addEventListener("DOMContentLoaded", () => {
  let sliderModulesAdded = new Event('sliderModulesAdded')
  document.dispatchEvent(sliderModulesAdded)

});

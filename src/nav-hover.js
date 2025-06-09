const card = document.querySelectorAll('.nav_card_wrap');

card.forEach((e) => {
  const initialColor1 = window.getComputedStyle(e).getPropertyValue('--grad-color1');
  const initialColor2 = window.getComputedStyle(e).getPropertyValue('--grad-color2');
  const initialIconText = window
    .getComputedStyle(e.querySelector('.nav_card_icon'))
    .getPropertyValue('color');
  const initialHeading = window
    .getComputedStyle(e.querySelector('.nav_card_heading'))
    .getPropertyValue('color');
  const initialIcon = window
    .getComputedStyle(e.querySelector('.nav_card_icon'))
    .getPropertyValue('background-color');

  e.addEventListener('mouseenter', () => {
    changeGradient(e, '#061742', '#0B37A1', 'white', '#092B7D');
  });

  e.addEventListener('mouseleave', () => {
    changeGradient(e, initialColor1, initialColor2, initialHeading, initialIcon, initialIconText);
  });
});
function changeGradient(element, color1, color2, textColor, iconColor, iconText = 'white') {
  let duration = 0.6;
  let paraColor = gsap.utils.interpolate('transparent', textColor, 0.8);
  gsap.to(element, {
    duration: duration / 2,
    ease: 'power2.out',
    '--grad-color1': color1,
    '--grad-color2': color2,
  });
  gsap.to(element.querySelector('.nav_card_para'), {
    duration,
    color: paraColor,
  });
  gsap.to(element.querySelector('.nav_card_heading'), {
    duration,
    color: textColor,
  });
  gsap.to(element.querySelector('.nav_card_icon'), {
    duration: duration / 2,
    backgroundColor: iconColor,
    color: iconText,
  });
}
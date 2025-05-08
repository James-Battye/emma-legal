// gsap.registerPlugin(ScrollTrigger);

// let stats = document.querySelectorAll('.stats_item'); // Replace with your selector

// stats.forEach((stat) => {
//   const heading = stat.querySelector('h2, h3, h4');
//   if (!heading) return;

//   heading.innerHTML = heading.textContent.replace(/(\d+)/g, '<span class="count">$1</span>');

//   const numberSpan = heading.querySelector('.count');
//   const endValue = parseInt(numberSpan.textContent, 10);
//   numberSpan.textContent = '0';

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.stats_wrap',
//       start: 'top 60%',
//       once: true,
//     },
//   });

//   tl.to(numberSpan, {
//     innerText: endValue,
//     duration: 2,
//     snap: { innerText: 1 },
//     ease: 'power1.out',
//     onUpdate: function () {
//       numberSpan.textContent = Math.floor(this.targets()[0].innerText);
//     },
//   });
// });

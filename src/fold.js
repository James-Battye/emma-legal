// window.addEventListener('load', () => {
//   if (window.innerWidth < 991) return;

//   let items = document.querySelectorAll('.fold_item_wrap');
//   let imgHolder = document.querySelector('.fold_img_inner');
//   let images = document.querySelectorAll('.fold_img');
//   let height = '5.5rem';

//   items.forEach((e) => {
//     let img = e.querySelector('.fold_img');

//     imgHolder.appendChild(img);
//   });

//   gsap.set(images, {
//     opacity: 0,
//   });

//   gsap.set(images[0], {
//     opacity: 1,
//   });

//   gsap.set(items, {
//     height: height,
//   });

//   gsap.set(items[0], {
//     height: 'auto',
//   });

//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.fold_contain',
//       start: 'center center',
//       end: `+=${items.length * 200}`,
//       scrub: true,
//       pin: true,
//       pinSpacing: true,
//     },
//   });

//   items.forEach((e, index) => {
//     if (index === 0) return;

//     tl.to(items[index - 1], {
//       height: height,
//       delay: 0.1,
//     });
//     tl.to(
//       images[index - 1],
//       {
//         opacity: 0,
//       },
//       '<'
//     );
//     tl.to(
//       items[index - 1].querySelectorAll(
//         '.g_paragraph, .btn_main_wrap:not([data-wf--btn-main--style="tag-white"]), .fold_item_heading'
//       ),
//       {
//         scale: 0.7,
//         opacity: 0,
//       },
//       '<'
//     );
//     tl.to(
//       e,
//       {
//         height: 'auto',
//       },
//       '<'
//     );
//     tl.to(
//       images[index],
//       {
//         opacity: 1,
//       },
//       '<'
//     );
//   });
// });

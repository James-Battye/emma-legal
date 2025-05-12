// document.addEventListener('DOMContentLoaded', () => {
//   let video = document.querySelector('.video_iframe');
//   let videoButton = document.querySelector('.cih_video_btn_clickable');

//   const options = {
//     width: video.getBoundingClientRect().width,
//     loop: true,
//     // id: 1079363511,
//   };
//   let player = new Vimeo.Player(video, options);

//   videoButton.addEventListener('click', function () {
//     gsap.to(videoButton.parentElement, {
//       autoAlpha: 0,
//     });

//     gsap.to('.g_visual_wrap', {
//       autoAlpha: 0,
//     });

//     player.play();
//   });
// });

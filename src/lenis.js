window.addEventListener("load", () => {

  window.lenisInstance = new Lenis();

  window.lenisInstance.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    window.lenisInstance.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

});
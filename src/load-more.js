window.addEventListener("load", () => {
  let loader = document.querySelector('.resources-list_load-more')

  loader.addEventListener('click', () => {
    setTimeout(() => {
      window.lenisInstance.resize()
    }, 200);
  })

  for (let i = 0; i < 2; i++) {
    setTimeout(() => {
      loader.click()
    }, 200);
  }
});
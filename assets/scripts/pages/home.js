import { init } from 'ityped'

// =========== Typing Carousel ================
// get data from hidden ul and set as typing data
document.addEventListener('DOMContentLoaded', () => {
  const $ul = document.getElementById('typing-carousel-data')?.children
  if ($ul == null || $ul.length === 0) return

  const strings = Array.from($ul).map($el => $el.textContent)

  init('#ityped', {
    strings,
    startDelay: 100,
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
  })
})

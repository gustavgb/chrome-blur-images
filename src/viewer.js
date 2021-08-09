/* globals location */

window.addEventListener('load', function () {
  const match = location.search.match(/url=(.*?)(&|$)/)

  if (match[1]) {
    document.getElementById('viewer').src = match[1]
  }
})

window.addEventListener('keydown', function (e) {
  if (e.key === ' ') {
    const el = document.getElementById('viewer')
    if (el.classList.contains('uncovered')) {
      el.classList.remove('uncovered')
    } else {
      el.classList.add('uncovered')
    }
  }
})

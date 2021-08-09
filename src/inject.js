/* globals chrome */

let imgClicked

window.addEventListener('contextmenu', function (e) {
  if (e.target.tagName === 'IMG') {
    imgClicked = e.target
  }
})

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.type === 'toggle_blur' && imgClicked) {
      if (imgClicked.classList.contains('uncovered')) {
        imgClicked.classList.remove('uncovered')
      } else {
        imgClicked.classList.add('uncovered')
      }
    }
  }
)

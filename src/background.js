/* globals chrome */

chrome.contextMenus.create({
  contexts: ['image'],
  onclick: function (info, tab) {
    chrome.tabs.sendMessage(tab.id, { type: 'toggle_blur' })
  },
  title: 'Toggle blur'
})

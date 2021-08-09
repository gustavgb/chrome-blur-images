/* globals chrome */

chrome.contextMenus.create({
  contexts: ['image'],
  onclick: function (info, tab) {
    console.log(info, tab)

    chrome.tabs.create({
      windowId: tab.windowId,
      url: chrome.extension.getURL('src/viewer.html') + '?url=' + encodeURI(info.srcUrl),
      openerTabId: tab.id
    })
  },
  title: 'Show original image'
})

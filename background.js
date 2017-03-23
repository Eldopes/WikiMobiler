chrome.runtime.onMessage.addListener(function(request, sender) { // listens to plain text message sent from front_content_script.js

  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var currentUrl = tabs[0].url;
    var splitResult = currentUrl.split("wikipedia");

    setNewUrl(splitResult[0] + "m.wikipedia" + splitResult[1]);
  });

  function setNewUrl(newUrl){
      sender.tab.id = null; // setting null tab id (does not really matter, just to provide argument)
      request.redirect = newUrl;
      chrome.tabs.update(sender.tab.id, {url: request.redirect});
  }
});

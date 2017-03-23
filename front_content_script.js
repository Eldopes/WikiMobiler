
// sending empty JSON message to background script to indicate that redirect is needed
chrome.runtime.sendMessage({redirect: ""});

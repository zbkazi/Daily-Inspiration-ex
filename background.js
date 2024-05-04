chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({resetTime: '00:00'});
  });
  
  chrome.runtime.onStartup.addListener(function() {
    chrome.storage.sync.get(['resetTime'], function(result) {
      let resetTime = result.resetTime || '00:00';
      let currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });
      if (currentTime === resetTime) {
        fetch('https://api.quotable.io/random')
          .then(response => response.json())
          .then(data => {
            chrome.storage.sync.set({quote: data.content + " - " + data.author});
          });
      }
    });
  });
  
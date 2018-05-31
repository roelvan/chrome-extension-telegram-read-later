const xhr = new XMLHttpRequest();
let TOKEN = '';
const API_KEY = 'da-ne-rotte';

chrome.storage.sync.get(null, data => {
  TOKEN = data['general.token'] || '';
});

chrome.browserAction.onClicked.addListener(tab => {
  xhr.open('POST', `https://telegram-read-later.now.sh/url`, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('x-api-key', API_KEY);
  xhr.send(
    JSON.stringify({
      url: tab.url,
      token: TOKEN
    })
  );
  chrome.notifications.create(null, {
    type: 'basic',
    title: '🚀',
    message: 'Sending this page to Telegram Read Me Later!',
    iconUrl: './icon128.png'
  });
});

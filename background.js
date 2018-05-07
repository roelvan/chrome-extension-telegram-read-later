const xhr = new XMLHttpRequest();
let TOKEN = '';
let CHAT_ID = '';

chrome.storage.sync.get('telegramSettings', data => {
  const { token, chatId } = data.telegramSettings;
  TOKEN = token || '';
  CHAT_ID = chatId || '';
});

chrome.browserAction.onClicked.addListener(tab => {
  xhr.open('POST', `https://api.telegram.org/bot${TOKEN}/sendMessage`, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(
    JSON.stringify({
      text: tab.url,
      chat_id: CHAT_ID
    })
  );
});

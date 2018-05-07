const xhr = new XMLHttpRequest();

chrome.browserAction.onClicked.addListener(tab => {
  xhr.open(
    'POST',
    'https://api.telegram.org/bot517613587:AAHXrJJ1p26De6eDbblS_EWAgr4AoYhElrw/sendMessage',
    true
  );
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(
    JSON.stringify({
      text: tab.url,
      chat_id: '386351095'
    })
  );
  const result = xhr.responseText;
  console.log(result);
});

'use strict';

const token = document.getElementById('token');
const chatId = document.getElementById('chatId');
const button = document.getElementById('buttonOk');

button.addEventListener('click', () => {
  const telegramSettings = { token: token.value, chatId: chatId.value };
  chrome.storage.sync.set(
    {
      telegramSettings
    },
    () => console.log(telegramSettings)
  );
});

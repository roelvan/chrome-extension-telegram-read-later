/* global chrome */

chrome.options.opts.about = `
<p>Install this <a href="https://telegram.me/readmelater_bot" target="_blank">Telegram Bot</a></p>

<p>
<ul>
<li>
  <strong>Privacy policy 🕵🏻‍</strong>
</li>
  <li>
    - This is the only data I store in my database:
  </li>
  <li>
    <pre>
    // Example "user" row
    {
      id: 1,
      telegram_id: 111111111,
      url_count: 27,
      token: '6babf679-abe4-4c29-9390-fb4f2b69e418'
    }
    </pre>
  </li>
</ul>
</p>

<p>
<ul>
    <li><strong>Fair use policy 🙏</strong></li>
    <li>- The bot is free of charge and offered without guarantees.</li>
    <li>- If needed, I might introduce rate limits in the future.</li>
    <li>- I might introduce a paid subscription for high-volume users.</li>
  </ul>
</p>

<p>
  Made by <a href="https://twitter.com/vaneyghen" target="_blank">@vaneyghen</a>
</p>

<p>
  <ul>
    <li>
      <li>
        <strong>Thanks to:</strong>
      </li>
      <li>
      - Chrome Options: https://github.com/fent/chrome-options
      </li>
      <li>
        - Telegram: https://telegram.org/
      </li>
  </ul>
<p>
`;

// chrome.options.set({ hideTabTitle: true });

chrome.options.addTab(
  'General',
  'Install this Telegram Bot (https://telegram.me/readmelater_bot) and add token:',
  [{ name: 'token', type: 'text', desc: 'Token' }]
);

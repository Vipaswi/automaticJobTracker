window.onload = function () {
  document.getElementById('signIn').addEventListener('click', function () {
    chrome.identity.getAuthToken({ interactive: true }, function (token) {

      if (chrome.runtime.lastError || !token) {
        console.error('Auth Error:', chrome.runtime.lastError);
        return;
      }

       // OAuth2 gmail token
      console.log('Gmail Token:', token);

      // send token to backend (not implemented yet)
      fetch('https://temporaryBackend.com/auth/gmail', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ source: 'chrome-extension' })
      })
        .then(response => response.json())
        .then(data => {
          console.log('Backend acknowledged auth:', data);
        })
        .catch(err => {
          console.error('Backend auth failed:', err);
        });
    });
  });
};

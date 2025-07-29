window.onload = function () {

  // If we have a token, persist it through the client and show current status

  // Otherwise, show the signIn button:
  document.getElementById('signIn').addEventListener('click', function () {
    chrome.identity.getAuthToken({ interactive: true }, function (token) {

      if (chrome.runtime.lastError || !token) {
        console.error('Auth Error:', chrome.runtime.lastError);
        return;
      }

       // OAuth2 gmail token
      console.log('Gmail Token:', token);
      document.getElementById('signIn').setAttribute('visibility', 'false');
      document.getElementById('i')

      // send token to backend (not implemented yet)
      fetch('http://localhost:8080', {
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

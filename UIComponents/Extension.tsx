import {useState, useEffect, useRef} from 'react'
import { ConfirmationForm } from './ConfirmationForm';
import React from 'react';

export const Extension = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const signInButton = useRef(null);

  function logIn () {
    chrome.identity.getAuthToken({ interactive: true }, function (token: any) {

      if (chrome.runtime.lastError || !token) {
        console.error('Auth Error:', chrome.runtime.lastError);
        return;
      } 

      setLoggedIn(true);

       // OAuth2 gmail token
      console.log('Gmail Token:', token);

      // Storage:
      //chrome.storage.local.set({oauthtoken: token});

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
  }

  // TODO: if we have the token, skip sign in and log in for the user.
  return <>
    {!loggedIn ? 
    <button className="g-signin2" id="signIn" onClick={logIn}>Sign In</button> 
    : 
      <ConfirmationForm/>
    }
  </>
}
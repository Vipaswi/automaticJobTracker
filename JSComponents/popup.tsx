import {GoogleOAuthProvider} from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import React from 'react'
import {useState, useEffect} from 'react'
import { mainScreen } from './mainScreen';

const popup = () => {
  const [failedLogin, setfailedLogin] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);
  const [token, setToken] = useState(null);

   // Get Pre-existing token, if any
  useEffect(() => {
    chrome.storage.local.get(['token'], (result) => {
      if (result.token) {
        setToken(result.token);
        setloggedIn(true);
        setfailedLogin(false);
      }
    });
  }, []);

  // Save token, save state
  const successfulLogin = (credentialResponse) => {
    chrome.storage.local.set({token : credentialResponse.token}); //save for future instances
    setloggedIn(true);
  };


  return (
    <GoogleOAuthProvider clientId='1013227706769-sin9ematt7gl151s6vdp2viembcui58k.apps.googleusercontent.com'>
      <div className="popup_parent">
        { loggedIn ? 
          <mainScreen/>
        :
        <GoogleLogin
          onSuccess={credentialResponse => {
            successfulLogin(credentialResponse);
          }}
          onError={() => {
            setfailedLogin(true);
            setloggedIn(false);
          }} 
        />
        }
      </div>
    </GoogleOAuthProvider>
  );
}
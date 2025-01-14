import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin, googleLogout, CredentialResponse } from '@react-oauth/google';
import { jwtDecode }  from 'jwt-decode';

const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';

const GoogleAuth = () => {
  const [user, setUser] = useState<any>(null);

  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    const decoded = credentialResponse?.credential ? jwtDecode(credentialResponse.credential): '';
    console.log('Decoded JWT:', decoded);
    setUser(decoded);
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div>
        <h1>Google OAuth with @react-oauth/google</h1>
        {!user ? (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => console.log('Login Failed')}
          />
        ) : (
          <div>
            <h2>Welcome, {user.name}</h2>
            <img src={user.picture} alt={user.name} style={{ borderRadius: '50%' }} />
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
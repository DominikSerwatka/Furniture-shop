import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(() => localStorage.getItem('accessToken'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (accessToken) {
      fetchUser();
    }
  }, [accessToken]);

  const refreshToken = async () => {
    const response = await fetch('api/auth/refresh', {
      method: 'POST',
      credentials: 'include',
    });
    console.log('Refreshing token, response status:', response.status);
    if (!response.ok) return false;

    const data = await response.json();
    setAccessToken(data.access_token);
    localStorage.setItem('accessToken', data.access_token);
    return true;
  };

  const fetchUser = async (retry = true) => {
    try {
      const response = await fetch('/api/users/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log(
        'Fetching user with access token:',
        accessToken,
        'response status:',
        response.status
      );

      if (!response.ok) {
        if (response.status === 401 && retry) {
          console.log('Access token invalid, trying refresh...');
          const refreshed = await refreshToken();
          if (!refreshed) {
            throw new Error('Failed to refresh token');
          }
          return await fetchUser(false);
        }
        throw new Error(`Failed to fetch user: ${response.statusText}`);
      }

      const data = await response.json();
      setUser(data);
      console.log('User fetched:', data);
      return data;
    } catch (error) {
      console.error(error);
      logout();
      return null;
    }
  };

  const login = async (email, password) => {
    const formData = new URLSearchParams();
    formData.append('username', email);
    formData.append('password', password);
    const response = await fetch('api/auth/token', {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });

    if (!response.ok) return false;

    const data = await response.json();

    setAccessToken(data.access_token);
    localStorage.setItem('accessToken', data.access_token);
    return true;
  };

  const register = async (registerData) => {
    console.log('Registering user with data:', registerData);
    const response = await fetch('api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    });

    if (!response.ok) return false;
    return true;
  };

  const logout = async () => {
    await fetch('api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });

    setAccessToken(null);
    setUser(null);
    localStorage.removeItem('accessToken');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        logout,
        register,
        refreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

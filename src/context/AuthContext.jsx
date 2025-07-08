import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem('users');
    return stored ? JSON.parse(stored) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const stored = localStorage.getItem('currentUser');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [currentUser]);

  const loginUser = ({ email, password }) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      console.log('User logged in:', user);
      return true;
    } else {
      console.log('Invalid email or password');
      return false;
    }
  };

  const loggOutUser = (user) => {
    console.log('User logged out:', user);
    setCurrentUser(null);
  };

  const registerUser = (newUser) => {
    const existingUser = users.some((u) => u.email === newUser.email);
    if (existingUser) {
      console.log('User already exists with this email');
      return false;
    }
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setCurrentUser(newUser);
    console.log('User registered:', newUser);
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        isLoggedIn: !!currentUser,
        loginUser,
        loggOutUser,
        registerUser,
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

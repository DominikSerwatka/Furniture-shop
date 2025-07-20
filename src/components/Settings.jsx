import React from 'react';
import { useAuth } from '../context/AuthContext';

function Settings() {
  const { currentUser } = useAuth();

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Ustawienia konta</h3>
      <p>Imię: {currentUser.name}</p>
      <p>Nazwisko: {currentUser.lastName}</p>
      <p>Email: {currentUser.email}</p>
    </div>
  );
}

export default Settings;

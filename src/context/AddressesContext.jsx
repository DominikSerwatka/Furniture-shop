import React, { useContext, useEffect, useMemo, useState } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from './AuthContext';

const AddressesContext = createContext();

function AddressesProvider({ children }) {
  const { isLoggedIn, currentUser } = useAuth();

  const addressesKey = useMemo(
    () => (isLoggedIn ? `addresses_${currentUser.email}` : 'addresses'),
    [isLoggedIn, currentUser?.email]
  );

  const loadAddresses = (key) => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
  };

  const [addresses, setAddresses] = useState(() => {
    return loadAddresses(addressesKey);
  });

  useEffect(() => {
    setAddresses(loadAddresses(addressesKey));
  }, [addressesKey]);

  useEffect(() => {
    localStorage.setItem(addressesKey, JSON.stringify(addresses));
  }, [addresses, addressesKey]);

  const updateAddresses = (newAddresses) => {
    setAddresses(newAddresses);
  };

  return (
    <AddressesContext.Provider value={{ addresses, updateAddresses }}>
      {children}
    </AddressesContext.Provider>
  );
}

const useAddresses = () => useContext(AddressesContext);

export { useAddresses, AddressesProvider };

AddressesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

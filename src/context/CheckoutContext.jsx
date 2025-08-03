import React, { createContext, useContext } from 'react';
import { useState } from 'react';
import propTypes from 'prop-types';

const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
  const [checkoutData, setCheckoutData] = useState({
    userData: {
      name: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      street: '',
      houseNumber: '',
      postalCode: '',
      city: '',
    },
    deliveryMethod: '',
    paymentMethod: '',
  });

  return (
    <CheckoutContext.Provider value={{ checkoutData, setCheckoutData }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = () => useContext(CheckoutContext);

CheckoutProvider.propTypes = {
  children: propTypes.node.isRequired,
};

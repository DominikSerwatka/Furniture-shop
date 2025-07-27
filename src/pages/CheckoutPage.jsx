import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCheckout } from '../context/CheckoutContext.jsx';

function CheckoutPage() {
  const navigate = useNavigate();

  const { setCheckoutData } = useCheckout();

  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    email: '',
    number: '',
    street: '',
    houseNumber: '',
    postalCode: '',
    city: '',
  });

  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const [nameFocus, setNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);
  const [streetFocus, setStreetFocus] = useState(false);
  const [houseNumberFocus, setHouseNumberFocus] = useState(false);
  const [postalCodeFocus, setPostalCodeFocus] = useState(false);
  const [cityFocus, setCityFocus] = useState(false);

  const inputOnBlur = (compareValue, methodToSet, key) => {
    console.log(key);
    methodToSet(compareValue !== '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitAction = () => {
    console.log(userData);
    setCheckoutData(() => ({
      userData: userData,
      deliveryMethod: deliveryMethod,
      paymentMethod: paymentMethod,
    }));
    navigate('/checkout/summary');
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitAction();
        }}
      >
        <h2 className="text-2xl font-bold">Dane osobowe</h2>

        <div className="pt-3 grid grid-cols-2 gap-4">
          <div className="relative col-span-1">
            {nameFocus && (
              <label
                htmlFor="firstName"
                className="absolute left-3 -top-3 px-1 text-s text-gray-500 bg-white"
              >
                Imię
              </label>
            )}
            <input
              type="text"
              name="name"
              placeholder={nameFocus ? '' : 'Imię'}
              className="border p-3 rounded w-full"
              onChange={handleChange}
              value={userData.name}
              onFocus={() => setNameFocus(true)}
              onBlur={() => inputOnBlur(userData.name, setNameFocus, 'name')}
            />
          </div>

          <div className="relative col-span-1">
            {lastNameFocus && (
              <label className="absolute left-3 -top-3 px-1 text-s text-gray-500 bg-white">
                Nazwisko
              </label>
            )}
            <input
              required
              type="text"
              name="lastName"
              placeholder={lastNameFocus ? '' : 'Nazwisko'}
              className="border p-3 rounded w-full"
              onChange={handleChange}
              value={userData.lastName}
              onFocus={() => setLastNameFocus(true)}
              onBlur={() => inputOnBlur(userData.lastName, setLastNameFocus, 'lastName')}
            />
          </div>

          <div className="relative col-span-1">
            {emailFocus && (
              <label
                htmlFor="email"
                className="absolute left-3 -top-3 px-1 text-s text-gray-500 bg-white"
              >
                Email
              </label>
            )}
            <input
              type="text"
              name="email"
              placeholder={emailFocus ? '' : 'Email'}
              className="border p-3 rounded w-full"
              onChange={handleChange}
              value={userData.email}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => inputOnBlur(userData.email, setEmailFocus, 'email')}
            />
          </div>

          <div className="relative col-span-1">
            {numberFocus && (
              <label
                htmlFor="number"
                className="absolute left-3 -top-3 px-1 text-s text-gray-500 bg-white"
              >
                Numer telefonu
              </label>
            )}
            <input
              type="text"
              name="number"
              placeholder={numberFocus ? '' : 'Numer telefonu'}
              className="border p-3 rounded w-full"
              onChange={handleChange}
              value={userData.number}
              onFocus={() => setNumberFocus(true)}
              onBlur={() => inputOnBlur(userData.number, setNumberFocus, 'number')}
            />
          </div>
        </div>

        <div className="pt-3 grid grid-cols-3 gap-4">
          <div className="relative col-span-2">
            {streetFocus && (
              <label
                htmlFor="street"
                className="absolute left-3 -top-3 px-1 text-s text-gray-500 bg-white"
              >
                Ulica
              </label>
            )}
            <input
              type="text"
              name="street"
              placeholder={streetFocus ? '' : 'Ulica'}
              className="border p-3 rounded w-full"
              onChange={handleChange}
              value={userData.street}
              onFocus={() => setStreetFocus(true)}
              onBlur={() => inputOnBlur(userData.street, setStreetFocus, 'street')}
            />
          </div>

          <div className="relative col-span-1">
            {houseNumberFocus && (
              <label
                htmlFor="houseNumber"
                className="absolute left-3 -top-3 px-1 text-s text-gray-500 bg-white"
              >
                Numer domu
              </label>
            )}
            <input
              type="text"
              name="houseNumber"
              placeholder={houseNumberFocus ? '' : 'Numer domu'}
              className="border p-3 rounded w-full"
              onChange={handleChange}
              value={userData.houseNumber}
              onFocus={() => setHouseNumberFocus(true)}
              onBlur={() => inputOnBlur(userData.houseNumber, setHouseNumberFocus, 'houseNumber')}
            />
          </div>

          <div className="relative col-span-1">
            {postalCodeFocus && (
              <label
                htmlFor="postalCode"
                className="absolute left-3 -top-3 px-1 text-s text-gray-500 bg-white"
              >
                Kod pocztowy
              </label>
            )}
            <input
              type="text"
              name="postalCode"
              placeholder={postalCodeFocus ? '' : 'Kod pocztowy'}
              className="border p-3 rounded w-full"
              onChange={handleChange}
              value={userData.postalCode}
              onFocus={() => setPostalCodeFocus(true)}
              onBlur={() => inputOnBlur(userData.postalCode, setPostalCodeFocus, 'postalCode')}
            />
          </div>

          <div className="relative col-span-2">
            {cityFocus && (
              <label
                htmlFor="city"
                className="absolute left-3 -top-3 px-1 text-s text-gray-500 bg-white"
              >
                Miejscowość
              </label>
            )}
            <input
              type="text"
              name="city"
              placeholder={cityFocus ? '' : 'Miejscowość'}
              className="border p-3 rounded w-full"
              onChange={handleChange}
              value={userData.city}
              onFocus={() => setCityFocus(true)}
              onBlur={() => inputOnBlur(userData.city, setCityFocus, 'city')}
            />
          </div>
        </div>

        <h2 className="pt-3 text-2xl font-bold">Metoda dostawy</h2>
        <div className="mt-2">
          <label className="flex items-center">
            <input
              className="accent-black"
              type="radio"
              name="deliveryMethod"
              value="kurier"
              checked={deliveryMethod === 'kurier'}
              onChange={() => setDeliveryMethod('kurier')}
            />
            <span className="ml-2">Kurier (15 zł)</span>
          </label>

          <label className="flex items-center">
            <input
              className="accent-black"
              type="radio"
              name="deliveryMethod"
              value="paczkomat"
              checked={deliveryMethod === 'paczkomat'}
              onChange={() => setDeliveryMethod('paczkomat')}
            />
            <span className="ml-2">Paczkomat (10 zł)</span>
          </label>
        </div>

        <h2 className="pt-3 text-2xl font-bold">Metoda płatności</h2>
        <div className="mt-2">
          <label className="flex items-center">
            <input
              className="accent-black"
              type="radio"
              name="paymentMethod"
              value="blik"
              checked={paymentMethod === 'blik'}
              onChange={() => setPaymentMethod('blik')}
            />
            <span className="ml-2">BLIK</span>
          </label>
        </div>

        <div className="flex justify-between items-center mt-10">
          <Link
            to="/shop-cart"
            className="inline-block bg-white text-dark px-4 py-2 rounded-md hover:bg-gray-200 border border-black transition"
          >
            Wróć do koszyka
          </Link>

          <button
            onClick={() => onSubmitAction()}
            type="submit"
            className="inline-block bg-white text-dark px-4 py-2 rounded-md hover:bg-gray-200 border border-black transition"
          >
            Przejdź dalej
          </button>
        </div>
      </form>
    </>
  );
}

export default CheckoutPage;

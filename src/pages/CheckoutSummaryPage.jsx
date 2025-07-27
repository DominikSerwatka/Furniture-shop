import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCheckout } from '../context/CheckoutContext.jsx';

function CheckoutSummaryPage() {
  const navigate = useNavigate();

  const { checkoutData } = useCheckout();
  const { userData, deliveryMethod, paymentMethod } = checkoutData;

  return (
    <>
      <h2 className="text-xl font-bold">Podsumowanie zamówienia</h2>

      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-semibold">Dane osobowe</h3>
        <p>
          {userData.name} {userData.lastName}
        </p>
        <p>{userData.email}</p>
        <p>{userData.number}</p>
        <p>
          {userData.street} {userData.houseNumber}, {userData.postalCode} {userData.city}
        </p>
        <Link to="/checkout" className="text-blue-600 underline text-sm">
          Zmień
        </Link>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-semibold">Dostawa</h3>
        <p>{deliveryMethod}</p>
        <Link to="/checkout" className="text-blue-600 underline text-sm">
          Zmień
        </Link>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-semibold">Płatność</h3>
        <p>{paymentMethod}</p>
        <Link to="/checkout" className="text-blue-600 underline text-sm">
          Zmień
        </Link>
      </div>

      <div className="flex justify-between items-center mt-10">
        <Link
          to="/checkout/orderring"
          className="inline-block bg-white text-dark px-4 py-2 rounded-md hover:bg-gray-200 border border-black transition"
        >
          Wróć do dostawy
        </Link>

        <button
          onClick={() => navigate('/checkout/order')}
          type="submit"
          className="inline-block bg-white text-dark px-4 py-2 rounded-md hover:bg-gray-200 border border-black transition"
        >
          Zapłać i złóż zamówienie
        </button>
      </div>
    </>
  );
}

export default CheckoutSummaryPage;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCheckout } from '../context/CheckoutContext.jsx';

function CheckoutSummaryPage() {
  const navigate = useNavigate();

  const { checkoutData } = useCheckout();
  const { userData, deliveryMethod, paymentMethod } = checkoutData;

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center">Podsumowanie zamówienia</h2>
      <section className="bg-white shadow rounded-lg p-6 mb-6 border">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold mb-2">Dane osobowe</h3>
            <p>
              {userData.name} {userData.lastName}
            </p>
            <p>{userData.email}</p>
            <p>{userData.phoneNumber}</p>
            <p>
              {userData.street} {userData.houseNumber}, {userData.postalCode} {userData.city}
            </p>
          </div>
          <Link to="/checkout/orderring" className="text-blue-600 hover:underline text-sm">
            Zmień
          </Link>
        </div>
      </section>

      <section className="bg-white shadow rounded-lg p-6 mb-6 border">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold mb-2">Dostawa</h3>
            <p>{deliveryMethod === 'kurier' ? 'Kurier (15 zł)' : 'Paczkomat (10 zł)'}</p>
          </div>
          <Link to="/checkout/orderring" className="text-blue-600 hover:underline text-sm">
            Zmień
          </Link>
        </div>
      </section>

      <section className="bg-white shadow rounded-lg p-6 mb-6 border">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold mb-2">Płatność</h3>
            <p>{paymentMethod === 'blik' ? 'BLIK' : paymentMethod}</p>
          </div>
          <Link to="/checkout/orderring" className="text-blue-600 hover:underline text-sm">
            Zmień
          </Link>
        </div>
      </section>

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
          className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Zapłać i złóż zamówienie
        </button>
      </div>
    </>
  );
}

export default CheckoutSummaryPage;

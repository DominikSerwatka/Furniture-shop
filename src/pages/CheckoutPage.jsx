import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const navigate = useNavigate();

  return (
    <>
      <form onSubmit={null}>
        <h2 className="text-2xl font-bold">Dane osobowe</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            required
            type="text"
            name="firstName"
            placeholder="Imię"
            className="border p-3 rounded"
            onChange={null}
            value={null}
          />
          <input
            required
            type="text"
            name="lastName"
            placeholder="Nazwisko"
            className="border p-3 rounded"
            onChange={null}
            value={null}
          />
          <input
            required
            type="tel"
            name="phone"
            placeholder="Telefon"
            className="border p-3 rounded col-span-2"
            onChange={null}
            value={null}
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="border p-3 rounded col-span-2"
            onChange={null}
            value={null}
          />
        </div>

        <h2 className="text-2xl font-bold my-6">Metoda dostawy</h2>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="deliveryMethod"
              value="kurier"
              checked={null}
              onChange={null}
            />
            <span className="ml-2">Kurier (15 zł)</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="deliveryMethod"
              value="paczkomat"
              checked={null}
              onChange={null}
            />
            <span className="ml-2">Paczkomat (10 zł)</span>
          </label>
        </div>

        <h2 className="text-2xl font-bold my-6">Metoda płatności</h2>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" value="blik" checked={null} onChange={null} />
            <span className="ml-2">BLIK</span>
          </label>
        </div>

        <div className="flex justify-between items-center mt-10">
          <Link
            to="/shop-cart"
            className="border border-black py-3 px-6 rounded hover:bg-gray-100 transition"
          >
            Wróć do koszyka
          </Link>

          <button
            onClick={() => navigate('/checkout/summary')}
            type="submit"
            className="bg-indigo-600 text-white py-3 px-6 rounded hover:bg-indigo-700 transition"
          >
            Przejdź dalej
          </button>
        </div>
      </form>
    </>
  );
}

export default CheckoutPage;

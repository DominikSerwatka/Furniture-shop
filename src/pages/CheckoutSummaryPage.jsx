import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function CheckoutSummaryPage() {
  const navigate = useNavigate();

  return (
    <>
      <div>CheckoutSummaryPage</div>
      <div className="flex justify-between items-center mt-10">
        <Link
          to="/checkout/orderring"
          className="border border-black py-3 px-6 rounded hover:bg-gray-100 transition"
        >
          Wróć do dostawy
        </Link>

        <button
          onClick={() => navigate('/checkout/order')}
          type="submit"
          className="bg-indigo-600 text-white py-3 px-6 rounded hover:bg-indigo-700 transition"
        >
          Zapłać i złóż zamówienie
        </button>
      </div>
    </>
  );
}

export default CheckoutSummaryPage;

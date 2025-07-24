import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function CheckoutMainLayout() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isSelected = 'font-bold text-indigo-600';
  const isSelectedBorder = 'border-b-2 border-indigo-600';

  var checkoutClasses = {
    '/checkout/orderring': ['font-bold text-gray-400', 'text-center flex-1'],
    '/checkout/summary': ['font-bold text-gray-400', 'text-center flex-1'],
  };

  checkoutClasses[currentPath][0] = isSelected;
  checkoutClasses[currentPath][1] += ` ${isSelectedBorder}`;

  return (
    <section className="pt-32 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow rounded-lg">
        <div className="flex items-center justify-between mb-10">
          <div className="text-center flex-1">
            <span className="font-bold text-gray-400">1. Koszyk</span>
          </div>
          <div className={checkoutClasses['/checkout/orderring'][1]}>
            <span className={checkoutClasses['/checkout/orderring'][0]}>2. Dostawa i płatność</span>
          </div>
          <div className={checkoutClasses['/checkout/summary'][1]}>
            <span className={checkoutClasses['/checkout/summary'][0]}>3. Podsumowanie</span>
          </div>
        </div>
        <Outlet />
      </div>
    </section>
  );
}

export default CheckoutMainLayout;

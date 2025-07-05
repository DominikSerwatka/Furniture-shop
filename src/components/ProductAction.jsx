import React from 'react';
import PropTypes from 'prop-types';

function ProductAction({ addToCart, product }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <button
          className="flex-1 py-3 px-6 inline-block bg-white text-dark rounded-md hover:bg-gray-200 border border-black transition"
          onClick={() => addToCart(product)}
        >
          Dodaj do koszyka
        </button>
        <button className="flex-1 py-3 px-6 inline-block bg-white text-dark rounded-md hover:bg-gray-200 border border-black transition">
          <i className="fa-regular fa-heart"></i>
          Ulubione
        </button>
      </div>
    </>
  );
}

export default ProductAction;

ProductAction.propTypes = {
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

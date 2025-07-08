import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useFavorites } from '../context/FavoritesContext';

function ProductListing({ product }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  let description = product.description;

  const { favorites, favoriteClick } = useFavorites();

  const addedToFavorites = favorites.some((p) => p.id === product.id);

  const buttonClass = addedToFavorites
    ? 'absolute text-white mx-4 bg-red-500 px-2 py-2 rounded-md border-red transition'
    : 'absolute text-black mx-4 px-2 py-2 rounded-md hover:bg-gray-900 hover:text-white transition';

  if (!showFullDescription) {
    description = description.substring(0, 60) + '...';
  }

  return (
    <div
      className="bg-gray-50 rounded-xl shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={product.picture} alt="Szafa przesuwna" className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-1">{description}</p>
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-gray-600 my-1 hover:text-black"
        >
          {showFullDescription ? 'Less' : 'More'}
        </button>
        <span className="block text-lg font-bold text-indigo-600 mb-2">{product.price}</span>
        <Link
          to={`/products/${product.id}`}
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Zobacz produkt
        </Link>
        {isHovered && (
          <button className={buttonClass} onClick={() => favoriteClick(product)}>
            <i className="fa-regular fa-heart"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductListing;

ProductListing.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function ProductListing({ product }) {


    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = product.description;

    if (!showFullDescription) {
        description  = description.substring(0, 60) + "...";
    }


  return (
        <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
        <img
            src={product.picture}
            alt="Szafa przesuwna"
            className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-1">{description}</p>
            <button onClick={ () => setShowFullDescription((prevState) => !prevState) } className="text-gray-600 my-1 hover:text-black">{ showFullDescription ? 'Less' : 'More'}</button>
            <span className="block text-lg font-bold text-indigo-600 mb-2">{product.price}</span>
            <Link
            to={`/product/${product.id}`}
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
            Zobacz produkt
            </Link>
        </div>
        </div>
  )
}

export default ProductListing
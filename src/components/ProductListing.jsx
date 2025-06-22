import React from 'react'

function ProductListing({ product }) {
  return (
        <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
        <img
            src={product.picture}
            alt="Szafa przesuwna"
            className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-3">{product.description}</p>
            <span className="block text-lg font-bold text-indigo-600 mb-2">{product.price}</span>
            <a
            href={`/product/${product.id}`}
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
            Zobacz produkt
            </a>
        </div>
        </div>
  )
}

export default ProductListing
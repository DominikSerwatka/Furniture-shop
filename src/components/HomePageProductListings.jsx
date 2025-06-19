import React from 'react'
import sliding_wardrobeImage from '../assets/images/szafa_przesuwna.webp'
import deskImage from '../assets/images/biurko.jpg'
import dresserImage from '../assets/images/komoda.webp'

function HomePageProductListings() {
  return (
    <>
        <section className="px-4 py-16 bg-white">
          <h2 className="text-3xl font-bold text-center mb-10">Nasze najpopularniejsze produkty</h2>
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    
            {/* <!-- Produkt 1: Szafa --> */}
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              <img
                src={sliding_wardrobeImage}
                alt="Szafa przesuwna"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">Szafa przesuwna</h3>
                <p className="text-gray-600 mb-3">Funkcjonalna i nowoczesna szafa z drzwiami przesuwnymi.</p>
                <span className="block text-lg font-bold text-indigo-600 mb-2">1 499 zł</span>
                <a
                  href="/produkty/szafa"
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  Zobacz produkt
                </a>
              </div>
            </div>
    
            {/* <!-- Produkt 2: Biurko --> */}
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              <img
                src={deskImage}
                alt="Biurko"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">Biurko drewniane</h3>
                <p className="text-gray-600 mb-3">Minimalistyczne biurko idealne do pracy i nauki.</p>
                <span className="block text-lg font-bold text-indigo-600 mb-2">799 zł</span>
                <a
                  href="/produkty/biurko"
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  Zobacz produkt
                </a>
              </div>
            </div>
    
            {/* <!-- Produkt 3: Komoda --> */}
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              <img
                src={dresserImage}
                alt="Komoda"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">Komoda z szufladami</h3>
                <p className="text-gray-600 mb-3">Stylowa komoda idealna do przechowywania drobiazgów.</p>
                <span className="block text-lg font-bold text-indigo-600 mb-2">649 zł</span>
                <a
                  href="/produkty/komoda"
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  Zobacz produkt
                </a>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default HomePageProductListings
import React from 'react'
import bathroomImage from './assets/images/bathromm.webp'
import kitchenImage from './assets/images/kitchen.avif'
import livingRoomImage from './assets/images/living_room.webp'
import officeImage from './assets/images/office.jpg'
import backgroundImage from './assets/images/salon_kanapa.webp'
import sliding_wardrobeImage from './assets/images/szafa_przesuwna.webp'
import deskImage from './assets/images/biurko.jpg'
import dresserImage from './assets/images/komoda.webp'
import Navbar from './components/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css'


const App = () => {
  return (
    <>
    <Navbar />

    <section
  className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* <!-- Treść hero --> */}
      <div className="ml-80 relative z-10 max-w-xs text-center text-black p-12 bg-white rounded-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nowa Kolekcja Mebli</h1>
        <p className="text-lg md:text-xl mb-6">
          Odkryj naszą nową linię ręcznie robionych mebli inspirowanych naturą i prostotą.
        </p>
        <a
          href="/produkty.html"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 border border-black transition"
        >
          Zobacz kolekcję
        </a>
      </div>
    </section>

    <section className="relative px-4 py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Meble do twojego wnętrza</h2>

      {/* <!-- Strzałka lewa --> */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200"
        aria-label="Poprzednie"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      {/* <!-- Kontener z kartami --> */}
      <div className="flex gap-6 overflow-hidden justify-center">
        {/* <!-- Karta 1 --> */}
        <div className="bg-white rounded-xl shadow-lg w-72 shrink-0">
          <img
            src={bathroomImage}
            alt="Łazienka"
            className="w-full h-60 object-cover rounded-t-xl"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">Łazienka</h3>
            <a href="/lazienka" className="text-indigo-600 font-medium hover:underline">Zobacz meble</a>
          </div>
        </div>

        {/* <!-- Karta 2 --> */}
        <div className="bg-white rounded-xl shadow-lg w-72 shrink-0">
          <img
            src={kitchenImage}
            alt="Kuchnia"
            className="w-full h-60 object-cover rounded-t-xl"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">Kuchnia</h3>
            <a href="/kuchnia" className="text-indigo-600 font-medium hover:underline">Zobacz meble</a>
          </div>
        </div>

        {/* <!-- Karta 3 --> */}
        <div className="bg-white rounded-xl shadow-lg w-72 shrink-0">
          <img
            src={livingRoomImage}
            alt="Pokój dzienny"
            className="w-full h-60 object-cover rounded-t-xl"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">Pokój</h3>
            <a href="/pokoj" className="text-indigo-600 font-medium hover:underline">Zobacz meble</a>
          </div>
        </div>

        {/* <!-- Karta 4 --> */}
        <div className="bg-white rounded-xl shadow-lg w-72 shrink-0">
          <img
            src={officeImage}
            alt="Pokój dzienny"
            className="w-full h-60 object-cover rounded-t-xl"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">Biuro</h3>
            <a href="/pokoj" className="text-indigo-600 font-medium hover:underline">Zobacz meble</a>
          </div>
        </div>

      </div>

      {/* <!-- Strzałka prawa --> */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200"
        aria-label="Następne"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </section>

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

export default App
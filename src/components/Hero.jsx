import React from 'react'
import backgroundImage from '../assets/images/salon_kanapa.webp'

function Hero({ title = 'Nowa Kolekcja Mebli', subtitle = 'Odkryj naszą najnowszą kolekcję mebli, które odmienią Twoje wnętrze!' }) {
  return (
    <>
        <section
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
          {/* <!-- Treść hero --> */}
          <div className="ml-80 relative z-10 max-w-xs text-center text-black p-12 bg-white rounded-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl mb-6">
              {subtitle}
            </p>
            <a
              href="/produkty.html"
              className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 border border-black transition"
            >
              Zobacz kolekcję
            </a>
          </div>
        </section>
    </>
  )
}

export default Hero
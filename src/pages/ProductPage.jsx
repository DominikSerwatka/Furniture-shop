import React from 'react'

function ProductPage() {
  return (
    <>
    <section className="pt-[80px] pb-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

            <button
            className="ml-[130px] absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200"
            aria-label="Poprzednie"
            >
            <i className="fa-solid fa-chevron-left"></i>
            </button>
            
            <div className="flex justify-center px-20">
                <img src="pictures/szafa_przesuwna.webp" alt="Produkt" className="rounded-xl shadow-md aspect-3/2 object-cover max-w-1/2" />
            </div>
            
            <button
                className="mr-[130px] absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200"
                aria-label="Następne"
            >
                <i className="fa-solid fa-chevron-right"></i>
            </button>

            <div className="py-12 px-12">
                <div>
                    <h1 className="flex justify-center text-3xl font-bold mb-4">Szafa przesuwna z lustrem</h1>
                    <p className="flex justify-center text-gray-600 mb-6">
                    Przestronna szafa z przesuwanymi drzwiami i eleganckim lustrem. Idealna do nowoczesnych wnętrz.
                    </p>
                </div>    
                
                <div className="flex justify-center text-2xl font-bold text-dark mb-6">
                    <p>1499 zł</p> 
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <button className="flex-1 py-3 px-6 inline-block bg-white text-dark rounded-md hover:bg-gray-200 border border-black transition">
                    Dodaj do koszyka
                    </button>
                    <button className="flex-1 py-3 px-6 inline-block bg-white text-dark rounded-md hover:bg-gray-200 border border-black transition">
                    <i className="fa-regular fa-heart"></i>
                    Ulubione
                    </button>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default ProductPage
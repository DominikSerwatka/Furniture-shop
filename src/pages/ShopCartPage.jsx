import React from 'react'
import shopCartProducts from '../shop_cart_products.json'

function ShopCartPage() {
  return (
    <>
        <section className="pt-40 pb-16 px-4 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Twój koszyk</h2>

                <div>
                    {shopCartProducts.map((product) => {
                        return (
                        <div className="flex items-center justify-between border-b pb-4">
                            <div className="flex items-center gap-4">
                                <img src={product.image} alt="Szafa" className="w-24 h-24 object-cover rounded-md shadow" />
                                <div>
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                    <p className="text-sm text-gray-600">Ilość: {product.amout}</p>
                                    <p className="text-sm text-gray-600">Cena: {product.price} zł</p>
                                </div>
                            </div>
                            <button className="text-dark hover:underline text-sm">Usuń</button>
                        </div>
                        )
                    })}
                </div>

                <div className="mt-10 pt-6 flex flex-col items-end">
                    <p className="text-lg font-semibold mb-4">Suma: <span className="text-dark">3297 zł</span></p>
                    
                    <a href="/checkout.html" className="inline-block bg-white text-dark px-4 py-2 rounded-md hover:bg-gray-200 border border-black transition">
                        Przejdź do płatności
                    </a>
                </div>
            </div>
        </section>
    </>
  )
}

export default ShopCartPage
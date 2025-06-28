import React from 'react'
import Hero from '../components/Hero'
import ProductListing from '../components/ProductListing'
import products from '../all_products.json'
import ProductsSort from '../components/ProductsSort'
import { useState } from 'react'

function ProductsPage() {

    const [sortOrder, setSortOrder] = useState('default');

    const handleSortChange = (value) => setSortOrder(value); 

    const sortProducts = sortOrder != 'default' ? [...products].sort((a, b) => {
        console.log(sortOrder);
        if (sortOrder == 'price-asc') {
            return a.price - b.price;
        } else if (sortOrder == 'price-desc') {
            return b.price - a.price;
        } else {
            return 0;
        }
    }) : products;



  return (
    <>
        <section className="pt-[80px] bg-white px-4">
            <div className="flex gap-6">

                <aside className="shrink-0 bg-white p-4">
                <ProductsSort value={sortOrder} onSortChange={handleSortChange}/>

                <h2 className="text-xl font-bold mb-6">Filtry</h2>

                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Materiał</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                        <li className="flex itmes-center gap-4">
                            <input type="checkbox" id="mat-wood" className="h-4 w-4"/>
                            <label htmlFor="mat-wood">Drewno</label>
                        </li>
                        <li className="flex itmes-center gap-4">
                            <input type="checkbox" id="mat-metal" className="h-4 w-4"/>
                            <label htmlFor="mat-metal">Metal</label>
                        </li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Pomieszczenie</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                        <li className="flex itmes-center gap-4">
                            <input type="checkbox" id="mat-room" className="h-4 w-4"/>
                            <label htmlFor="mat-room">Pokój</label>
                        </li>
                        <li className="flex itmes-center gap-4">
                            <input type="checkbox" id="mat-kitchen" className="h-4 w-4"/>
                            <label htmlFor="mat-kitchen">Kuchnia</label>
                        </li>
                        <li className="flex itmes-center gap-4">
                            <input type="checkbox" id="mat-bathroom" className="h-4 w-4"/>
                            <label htmlFor="mat-bathroom">Łazienka</label>
                        </li>
                        <li className="flex itmes-center gap-4">
                            <input type="checkbox" id="mat-office" className="h-4 w-4"/>
                            <label htmlFor="mat-office">Biuro</label>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Kolekcje</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                        <li className="flex itmes-center gap-4">
                            <input type="checkbox" id="mat-popular" className="h-4 w-4"/>
                            <label htmlFor="mat-popular">Popularne</label>
                        </li>
                        <li className="flex itmes-center gap-4">
                            <input type="checkbox" id="mat-new" className="h-4 w-4"/>
                            <label htmlFor="mat-new">Nowa kolekcja</label>
                        </li>
                    </ul>
                </div>
                <div className="mb-2 py-3">
                <button
                    className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-200 border border-black transition">
                    Zastosuj filtry
                </button>
                </div>
                </aside>

                <div className="flex-1 min-w-0 bg-white p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">                        
                        {sortProducts.map((product) => 
                        <ProductListing key={product.id} product={product}/>)}
                    </div>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default ProductsPage
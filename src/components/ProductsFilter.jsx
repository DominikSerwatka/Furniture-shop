import React from 'react'
import ProductsFilterGroupe from './ProductsFilterGroupe'

function ProductsFilter({ value, onFilterChange }) {
  return (
    <>
        <h2 className="text-xl font-bold mb-6">Filtry</h2>

        <ProductsFilterGroupe value={value} onFilterChange={onFilterChange} category="material" options={['drewno', 'metal']} name="Materiał"/>

        <ProductsFilterGroupe value={value} onFilterChange={onFilterChange} category="space" options={['pokoj', 'kuchnia', 'lazienka', 'biuro']} name="Pomieszczenie"/>

        <ProductsFilterGroupe value={value} onFilterChange={onFilterChange} category="collection" options={['popularne', 'nowa-kolekcja']} name="Kolekcje"/>

        <div className="mb-2 py-3">
            <button
                className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-200 border border-black transition">
                Zastosuj filtry
            </button>
        </div>
    </>
  )
}

export default ProductsFilter
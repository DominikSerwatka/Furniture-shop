import React from 'react'
import products from '../popular_products.json'
import ProductListing from './ProductListing'


function HomePageProductListings() {
  return (
    <>
        <section className="px-4 py-16 bg-white">
          <h2 className="text-3xl font-bold text-center mb-10">Nasze najpopularniejsze produkty</h2>
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => 
              <ProductListing key={product.id} product={product} />
            )}
          </div>
        </section>
    </>
  )
}

export default HomePageProductListings
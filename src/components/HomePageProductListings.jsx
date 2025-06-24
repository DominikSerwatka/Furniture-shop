import React from 'react'
import products from '../popular_products.json'
import ProductListing from './ProductListing'


function HomePageProductListings() {

  const productsToShow = products.slice(0, 4);

  return (
    <>
        <section className="px-4 py-16 bg-white">
          <h2 className="text-3xl font-bold text-center mb-10">Nasze najpopularniejsze produkty</h2>
    
          <div className="flex gap-6 overflow-hidden justify-center max-w-6xl mx-auto">
            {productsToShow.map((product) => 
              <ProductListing key={product.id} product={product} />
            )}
          </div>
        </section>
    </>
  )
}

export default HomePageProductListings
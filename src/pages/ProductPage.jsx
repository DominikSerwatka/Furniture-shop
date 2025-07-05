import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import ProductImage from '../components/ProductImage.jsx';
import ProductDetails from '../components/ProductDetails.jsx';
import ProductAction from '../components/ProductAction.jsx';

function ProductPage() {
  const product = useLoaderData();

  const { addToCart } = useCart();

  return (
    <>
      <section className="pt-[80px] pb-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <ProductImage picture={product.picture} altText={product.name} />

          <div className="py-12 px-12">
            <ProductDetails
              productName={product.name}
              productDescription={product.description}
              productPrice={product.price}
            />
            <ProductAction addToCart={addToCart} product={product} />
          </div>
        </div>
      </section>
    </>
  );
}

const productLoader = async ({ params }) => {
  const res = await fetch(`/api/products/${params.id}`);
  const data = await res.json();
  return data;
};

export { ProductPage as default, productLoader };

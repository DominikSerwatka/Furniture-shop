import { useLoaderData } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

function ProductPage() {

    const product = useLoaderData();

    const { addToCart } = useCart();

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
                    <img src={product.picture} alt="Produkt" className="rounded-xl shadow-md aspect-3/2 object-cover max-w-1/2" />
                </div>
                
                <button
                    className="mr-[130px] absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200"
                    aria-label="Następne"
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>

                <div className="py-12 px-12">
                    <div>
                        <h1 className="flex justify-center text-3xl font-bold mb-4">{product.description}</h1>
                        <p className="flex justify-center text-gray-600 mb-6">
                        {product.description}
                        </p>
                    </div>    
                    
                    <div className="flex justify-center text-2xl font-bold text-dark mb-6">
                        <p>{product.price} zł</p> 
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-between">
                        <button className="flex-1 py-3 px-6 inline-block bg-white text-dark rounded-md hover:bg-gray-200 border border-black transition" 
                        onClick={() => addToCart(product)}>
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

const productLoader = async ({ params }) => {
    const res = await fetch(`/api/products/${params.id}`);
    const data = await res.json();
    return data;
}

export { ProductPage as default, productLoader }; 
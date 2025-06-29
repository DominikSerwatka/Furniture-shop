import { useState, useEffect, use } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useLoaderData } from 'react-router-dom';

function ProductPage() {

    const { id } = useParams();
    const product = useLoaderData();

    // const [product, setProduct] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         try {
    //             const res = await fetch(`/api/products/${id}`);
    //             const data = await res.json();
    //             setProduct(data);
    //         } catch (error) {
    //             console.error('Error fetching product:', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchProduct();
    //     }, []);

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
                        <h1 className="flex justify-center text-3xl font-bold mb-4">Szafa przesuwna z lustrem</h1>
                        <p className="flex justify-center text-gray-600 mb-6">
                        {product.description}
                        </p>
                    </div>    
                    
                    <div className="flex justify-center text-2xl font-bold text-dark mb-6">
                        <p>{product.price} zł</p> 
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
            {/* { loading ? (<Spinner loading={loading}/>) : (
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
                        <h1 className="flex justify-center text-3xl font-bold mb-4">Szafa przesuwna z lustrem</h1>
                        <p className="flex justify-center text-gray-600 mb-6">
                        {product.description}
                        </p>
                    </div>    
                    
                    <div className="flex justify-center text-2xl font-bold text-dark mb-6">
                        <p>{product.price} zł</p> 
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
            )} */}

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
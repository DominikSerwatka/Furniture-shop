import React from 'react'
import ProductListing from '../components/ProductListing'
import ProductsSort from '../components/ProductsSort'
import ProductsFilter from '../components/ProductsFilter'
import Spinner from '../components/Spinner'
import { useState, useEffect } from 'react'

function ProductsPage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('api/products');
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.log('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    const [sortOrder, setSortOrder] = useState('default');

    const defaultFilterSettings = {
        material: [],
        space: [],
        collection: [],
    };

    const [filterSettings, setFilterSettings] = useState(defaultFilterSettings);

    const handleFilterChange = (category, value) => {
        setFilterSettings(prev => {
            const currentValues = prev[category];
            const newValues = currentValues.includes(value) ? currentValues.filter(v => v !== value) : [...currentValues, value];
            return {
                ...prev,
                [category]: newValues,
            }
        })
    };
        

    const handleSortChange = (value) => setSortOrder(value); 

    const filteredProducts = filterSettings != defaultFilterSettings ? [...products].filter((product) => {
        let matches = true;

        if (filterSettings.material.length > 0) {
            matches = matches && filterSettings.material.includes(product.material);
        }

        if (filterSettings.space.length > 0) {
            matches = matches && filterSettings.space.includes(product.space);
        }

        if (filterSettings.collection.length > 0) {
            matches = matches && filterSettings.collection.includes(product.collection);
        }

        return matches;

    }) : products;

    const sortProducts = sortOrder != 'default' ? [...filteredProducts].sort((a, b) => {
        console.log(sortOrder);
        if (sortOrder == 'price-asc') {
            return a.price - b.price;
        } else if (sortOrder == 'price-desc') {
            return b.price - a.price;
        } else {
            return 0;
        }
    }) : filteredProducts;



  return (
    <>
        <section className="pt-[80px] bg-white px-4">
            <div className="flex gap-6">

                <aside className="shrink-0 bg-white p-4">
                <ProductsSort value={sortOrder} onSortChange={handleSortChange}/>
                <ProductsFilter value={ filterSettings } onFilterChange={ handleFilterChange }/>
                </aside>

                <div className="flex-1 min-w-0 bg-white p-4">
                        { loading ? (<Spinner loading={loading}/>) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {sortProducts.map((product) => 
                                <ProductListing key={product.id} product={product}/>)}
                            </div>
                        </>)}                        
                </div>
    
            </div>
        </section>
    </>
  )
}

export default ProductsPage
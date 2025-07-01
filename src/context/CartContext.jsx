import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem('cart');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => {
            const existingProduct = prev.find((p) => p.id === product.id);
            if (existingProduct) {
                return prev.map((p) => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
        console.log('Product added to cart:', product);
    };

    const removeFromCart = (productId) => {
        setCart((prev) => prev.filter((p) => p.id !== productId));
    }

    const removeOneFromCart = (productId) => {
        setCart((prev) => {
            const existingProduct = prev.find((p) => p.id === productId);
            if (existingProduct && existingProduct.quantity > 1) {
                return prev.map((p) => p.id === productId ? { ...p, quantity: p.quantity - 1 } : p);
            } else {
                return prev.filter((p) => p.id !== productId);
            }
        });
    }


    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, removeOneFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
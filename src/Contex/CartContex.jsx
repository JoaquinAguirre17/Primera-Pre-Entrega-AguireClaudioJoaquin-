// CartContext.js
import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (product, count) => {
        setCart(prevCart => {
            // Encuentra el  producto en el carrito
            const existingItem = prevCart.findIndex(item => item.id === product.id);

            if (existingItem !== -1) {
                // Si el producto ya existe en el carrito actualiza su cantidad
                return prevCart.map((item, index) =>
                    index === existingItem
                        ? { ...item, count: item.count + count }
                        : item
                );
            } else {
                // Si el producto no está en el carrito agréga el nuevo producto
                return [...prevCart, { ...product, count }];
            }
        });
    };

    

    //Funcion para eliminar un producto del carrito
    const removeItem = (itemId) => {
        setCart(prevCart => prevCart.filter(product => product.id !== itemId));
    };

    //Funcion que calcula la cantidad de productos 
    const totalCountProducts = () => cart.reduce((acc) => acc + 1, 0)

    //Funcion que calcula la suma de los precios
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.precio * item.count, 0);
    };
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalCountProducts, getTotalPrice, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};




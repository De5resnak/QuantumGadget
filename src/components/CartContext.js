import React, { createContext, useContext, useState, useEffect } from 'react';

// Создаем контекст корзины
const CartContext = createContext();

// Хук для использования контекста корзины
export const useCart = () => useContext(CartContext);

// Поставщик контекста корзины
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // При монтировании компонента загружаем корзину из localStorage
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCart) {
            setCartItems(storedCart);
        }
    }, []);

    // Сохранение корзины в localStorage при изменении cartItems
    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } else {
            localStorage.removeItem('cartItems'); // Удаляем корзину, если она пуста
        }
    }, [cartItems]);

    // Добавление товара в корзину
    const addToCart = (item) => {
        setCartItems(prevItems => {
            const itemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
            if (itemIndex !== -1) {
                // Если товар уже есть в корзине, обновляем количество
                const updatedItems = [...prevItems];
                updatedItems[itemIndex].quantity += 1;
                return updatedItems;
            } else {
                // Если товара нет в корзине, добавляем новый
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    // Удаление товара из корзины
    const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };

    // Получение общей цены товаров в корзине
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
    };

    // Очистка корзины
    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalPrice, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

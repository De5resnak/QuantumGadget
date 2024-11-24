import React from 'react';
import { useCart } from './../CartContext';

const CartPage = () => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <div>
            <h1>Корзина</h1>
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.price} ₽
                            <button onClick={() => removeFromCart(item)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartPage;

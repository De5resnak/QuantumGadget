import React, { useState } from 'react';
import { useCart } from '../CartContext';
import './CheckoutPage.css';
import PickupOptions from './PickupOptions';
import shield from '../../assets/icon/shield.svg';
import strelka from '../../assets/icon/strelka.svg';
import help from '../../assets/icon/help.svg';

const CheckoutPage = () => {
    const { cartItems, getTotalPrice, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        deliveryMethod: 'pickup',
        address: '',
        paymentMethod: 'online',
        onlinePaymentType: 'sbp',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const getTotalWithDelivery = () => {
        const deliveryFee = formData.deliveryMethod === 'delivery' ? 500 : 0;
        return getTotalPrice() + deliveryFee;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Проверка наличия товаров в корзине
        if (cartItems.length === 0) {
            alert('Корзина пуста!');
            return;
        }

        // Подготовка данных для отправки на сервер
        const orderData = {
            customer_name: formData.name,
            email: formData.email,
            phone_number: formData.phone,
            delivery_method: formData.deliveryMethod,
            address: formData.deliveryMethod === 'delivery' ? formData.address : '',  // Адрес нужен только при доставке
            payment_method: formData.paymentMethod,
            online_payment_type: formData.onlinePaymentType,
            items: cartItems.map((item) => ({
                product_id: item.id,
                quantity: item.quantity,
            })),
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/api/orders/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                const data = await response.json();
                clearCart();
                window.location.href = `/order-confirmation/${data.orderId}`; // Редирект на страницу с подтверждением заказа
            } else {
                console.error('Ошибка при оформлении заказа');
                alert('Ошибка при оформлении заказа');
            }
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
            alert('Произошла ошибка при отправке данных');
        }
    };

    return (
        <div className="checkout-page container mt-5">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-8">
                    <h1 className="mb-4">Оформление заказа</h1>
                    <div className="checkout-items mb-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="checkout-item d-flex align-items-center mb-3">
                                <img src={item.image} alt={item.name} width="50" height="50" className="me-3"/>
                                <div>
                                    <h5 className="mb-1">{item.name}</h5>
                                    <p className="mb-0">{item.price}₽ × {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                        <div className="total-price">
                            <h5 className="fw-bold">Общая сумма: {getTotalWithDelivery()}₽</h5>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="checkout-form">
                        <h2 className="mb-3">Данные покупателя</h2>
                        <div className="mb-3">
                            <label className="form-label">Имя</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Телефон</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <h2 className="mb-3">Выберите способ получения</h2>
                        <div className="mb-3 d-flex">
                            <button
                                type="button"
                                className={`btn btn-option ${formData.deliveryMethod === 'pickup' ? 'active' : ''}`}
                                onClick={() => setFormData((prevData) => ({ ...prevData, deliveryMethod: 'pickup' }))}
                            >
                                Самовывоз
                            </button>
                            <button
                                type="button"
                                className={`btn btn-option ${formData.deliveryMethod === 'delivery' ? 'active' : ''}`}
                                onClick={() => setFormData((prevData) => ({ ...prevData, deliveryMethod: 'delivery' }))}
                            >
                                Доставка
                            </button>
                        </div>

                        {formData.deliveryMethod === 'pickup' && (
                            <div className="mb-3">
                                <label className="form-label">Выберите пункт самовывоза</label>
                                <PickupOptions />
                            </div>
                        )}

                        {formData.deliveryMethod === 'delivery' && (
                            <div className="mb-3">
                                <label className="form-label">Адрес доставки</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                />
                                <p className="text-warning mt-2">Стоимость доставки: 500₽</p>
                            </div>
                        )}

                        <h2 className="mb-3">Выберите способ оплаты</h2>
                        <div className="mb-3 d-flex">
                            <button
                                type="button"
                                className={`btn btn-option ${formData.paymentMethod === 'online' ? 'active' : ''}`}
                                onClick={() => setFormData((prevData) => ({ ...prevData, paymentMethod: 'online' }))}
                            >
                                Онлайн
                            </button>
                            <button
                                type="button"
                                className={`btn btn-option ${formData.paymentMethod === 'cash' ? 'active' : ''}`}
                                onClick={() => setFormData((prevData) => ({ ...prevData, paymentMethod: 'cash' }))}
                            >
                                При получении
                            </button>
                        </div>
                        {formData.paymentMethod === 'online' && (
                            <div className="mb-3 online-payment-buttons">
                                <label className="form-label">Способ онлайн оплаты</label>
                                <div className="online-payment-options d-flex">
                                    <button
                                        type="button"
                                        className={`btn btn-option pay-online-bth ${formData.onlinePaymentType === 'sbp' ? 'active' : ''}`}
                                        onClick={() => setFormData((prevData) => ({ ...prevData, onlinePaymentType: 'sbp' }))}
                                    >
                                        СБП
                                    </button>
                                    <button
                                        type="button"
                                        className={`btn btn-option pay-online-bth ${formData.onlinePaymentType === 'sberpay' ? 'active' : ''}`}
                                        onClick={() => setFormData((prevData) => ({ ...prevData, onlinePaymentType: 'sberpay' }))}
                                    >
                                        СберPay
                                    </button>
                                    <button
                                        type="button"
                                        className={`btn btn-option pay-online-bth ${formData.onlinePaymentType === 'card' ? 'active' : ''}`}
                                        onClick={() => setFormData((prevData) => ({ ...prevData, onlinePaymentType: 'card' }))}
                                    >
                                        Картой
                                    </button>
                                </div>
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary w-100">Подтвердить заказ</button>
                    </form>
                </div>

                {/* Блок с информацией о безопасности, возврате и помощи */}
                <div className="col-lg-4">
                    <div className="info-block mb-4 mt-2">
                        <img src={shield} alt="Безопасная оплата" className="mb-2"/>
                        <h5>Безопасная оплата</h5>
                        <p>Ваши платежи под надежной защитой</p>
                    </div>
                    <div className="info-block mb-4">
                        <img src={strelka} alt="Легкий возврат" className="mb-2"/>
                        <h5>Легкий возврат</h5>
                        <p>Вернем всю сумму или обменяем товар</p>
                    </div>
                    <div className="info-block mb-4">
                        <img src={help} alt="Нужна помощь?" className="mb-2"/>
                        <h5>Нужна помощь?</h5>
                        <p>8-800-88-88-888 (c 03:00 до 22:00)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;

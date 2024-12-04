import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './OrderConfirmationPage.css';

const OrderConfirmationPage = () => {
    const { orderId } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await fetch(`/api/orders/${orderId}`);
                const data = await response.json();
                setOrderDetails(data);
            } catch (error) {
                console.error('Ошибка при получении данных о заказе', error);
            }
        };

        fetchOrderDetails();
    }, [orderId]);

    if (!orderDetails) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="container mt-5">
            <h1>Информация о заказе</h1>
            <div className="order-info mt-4">
                <h3>Номер заказа: {orderDetails.orderId}</h3>
                <p><strong>Дата заказа:</strong> {new Date(orderDetails.date).toLocaleDateString()}</p>
                <p><strong>Сумма заказа:</strong> {orderDetails.totalPrice}₽</p>
                <p><strong>Способ получения:</strong> {orderDetails.deliveryMethod === 'pickup' ? 'Самовывоз' : 'Доставка'}</p>
                <p><strong>Способ оплаты:</strong> {orderDetails.paymentMethod === 'online' ? 'Онлайн' : 'При получении'}</p>

                {orderDetails.deliveryMethod === 'delivery' && (
                    <p><strong>Адрес доставки:</strong> {orderDetails.address}</p>
                )}
            </div>
            <a href="/" className="button">Вернуться на главную</a>
        </div>
    );
};

export default OrderConfirmationPage;

import React from 'react';
import './PayAndDelivery.css';
import deliverel from '../../assets/images/Deliverel.jpg';

const PayAndDelivery = () => {
    return (
        <main>
            <section className="PayAndDelivery py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <img src={deliverel} className="img-fluid mb-3" alt="Доставка"/>
                        </div>
                        <div className="col-lg-6 col-12">
                            <h1 className="text-title mb-4">Доставка</h1>

                            <div className="delivery-block mb-4">
                                <h3 className="sub-title bg-primary text-white p-3">Экспресс-доставка от 2 часов</h3>
                                <div className="content p-3">
                                    <p><strong>При заказе до 20:00</strong></p>
                                    <p>Быстрая доставка — оперативное получение нужной техники, если вы проживаете в
                                        Краснодаре.</p>
                                    <h5>Получи заказ максимально быстро:</h5>
                                    <ul className="list-group">
                                        <li className="list-group-item">Добавь товары в корзину, а при оформлении заказа
                                            выбери <strong>«Экспресс-доставку от 2 часов»</strong>.
                                        </li>
                                        <li className="list-group-item">Укажи адрес доставки и оплати заказ онлайн или
                                            электронными деньгами.
                                        </li>
                                        <li className="list-group-item">Ожидай доставку в течение 2 – 3 часов!</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="delivery-block">
                                <h3 className="sub-title bg-success text-white p-3">Стандартная доставка</h3>
                                <div className="content p-3">
                                    <p>Стандартная доставка — актуальна всегда и максимально безопасна как для клиентов,
                                        так и курьеров. Мы доставим крупногабаритную технику на дом и даже на дачу.</p>
                                    <h5>Всё просто:</h5>
                                    <ul className="list-group">
                                        <li className="list-group-item">Оформи заказ на сайте или в приложении, выбрав
                                            доставку.
                                        </li>
                                        <li className="list-group-item">Стоимость доставки будет зависеть от суммы
                                            заказа и выбора дополнительных опций.
                                        </li>
                                        <li className="list-group-item">Оплати заказ на сайте или при получении.
                                            Наслаждайся новой техникой!
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Payment py-5">
                <div className="container">
                    <h1 className="text-title mb-4">Оплата</h1>
                    <div className="row">
                        <div className="col-md-6 col-12 mb-4">
                            <div className="payment-option bg-primary text-white p-4 rounded">
                                <h3 className="option-title">Онлайн оплата банковской картой</h3>
                                <p>Оплата осуществляется с помощью банковской карты. Просто вводите данные вашей карты и
                                    завершайте покупку.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 mb-4">
                            <div className="payment-option bg-success text-white p-4 rounded">
                                <h3 className="option-title">Система быстрых платежей</h3>
                                <p>Быстро и без комиссий. Произведите оплату с помощью мобильного приложения своего
                                    банка. Сумма моментально спишется с вашего счета.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 mb-4">
                            <div className="payment-option bg-info text-white p-4 rounded">
                                <h3 className="option-title">Безналичная оплата по счету</h3>
                                <p>Оплата доступна всем юридическим и физическим лицам. После оформления заказа в
                                    течении 1 рабочего часа Вам высылается счет по электронной почте или по факсу.
                                    Комиссия не взимается.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 mb-4">
                            <div className="payment-option bg-warning text-white p-4 rounded">
                                <h3 className="option-title">Кредит и рассрочка</h3>
                                <p>Оплачивайте покупку в рассрочку или в кредит от крупнейших банков и сервисов.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PayAndDelivery;

import React from 'react';
import './FaqPage.css';
import { Accordion } from 'react-bootstrap';
import {Link} from "react-router-dom";


const FaqPage = () => {
    return (
        <main>
            <section className="FAQ">
                <div className="container">
                    <div className="block-title">
                        <h1>Frequently asked questions</h1>
                        <p>Часто задаваемые вопросы и ответы на них</p>
                    </div>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Как создать учетную запись?</Accordion.Header>
                            <Accordion.Body>
                                Для создания учетной записи нажмите на кнопку "Войти" в верхнем правом углу страницы, заполните все необходимые поля и подтвердите регистрацию через SMS.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Как сделать заказ?</Accordion.Header>
                            <Accordion.Body>
                                Для оформления заказа выберите интересующие товары, добавьте их в корзину и перейдите к оформлению заказа, следуя инструкциям на экране.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Какие способы оплаты вы принимаете?</Accordion.Header>
                            <Accordion.Body>
                                Мы принимаем следующие способы оплаты: кредитные и дебетовые карты, а так же оплата наличиными при получении заказа.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Как связаться с поддержкой?</Accordion.Header>
                            <Accordion.Body>
                                Вы можете связаться с нашей поддержкой через форму обратной связи на странице "ContactUS", по телефону 123-456-789 или по электронной почте support@quantumgadget.ru.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Какие сроки доставки?</Accordion.Header>
                            <Accordion.Body>
                                Сроки доставки зависят от вашего местоположения и выбранного способа доставки. Обычно доставка занимает от 3 до 7 рабочих дней.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Могу ли я изменить или отменить заказ после его оформления?</Accordion.Header>
                            <Accordion.Body>
                                Вы можете изменить или отменить заказ, если он еще не был отправлен. Для этого свяжитесь с нашей службой поддержки как можно скорее.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Предоставляете ли вы гарантию на свои товары?</Accordion.Header>
                            <Accordion.Body>
                                Да, мы предоставляем гарантию на все наши товары. Гарантийные сроки могут различаться в зависимости от продукта. Подробную информацию можно найти на странице продукта.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <p className="text-center pt-4 px-3 fw-normal "> Не нашли подходящего ответа?<Link to="/ConUs">Расскажите нам, что вам нужно.</Link></p>
                </div>
            </section>
        </main>
    );
};

export default FaqPage;

import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../Slider/Slider';
import './HomePage.css';
import ProductList from "../product-card/productList";
import stiralka from "../../assets/images/stiralka.jpg";
import gift from "../../assets/icon/icons8-подарок-32.png";
import ok from "../../assets/icon/icons8-ок-32.png";
import support from "../../assets/icon/icons8-помощник-32.png";
import like from "../../assets/icon/icons8-нравится-32.png";
import womanStiraet from "../../assets/images/womanStiraet.jpg";
import man from "../../assets/images/maniposyda.jpg";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import ProductListPopylar from "../ProductListPopylar/ProductListPopylar";

const HomePage = () => {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <main>
            <div>
                <Slider/>
            </div>
            <section className="main-section py-5">
                <Container>
                    <div className="block-title text-center mb-4">
                        <h2>Популярные товары</h2>
                        <p>Что выбирают наши клиенты</p>
                    </div>
                    <ProductListPopylar/>
                </Container>
            </section>

            <section className="materials-section py-5 bg-light">
                <Container>
                    <div className="text-center mb-4">
                        <h2>Мы используем лучшие материалы</h2>
                    </div>
                    <p>Одним из основных преимуществ нашего интернет-магазина является ее исключительное качество и
                        долговечность. Наша продукция рассчитана на длительный срок службы, и это особенно верно для
                        бытовой техники. Многие бытовые приборы производства изготавливаются из высококачественных
                        материалов и с использованием более передовых технологий, что позволяет им выдерживать износ при
                        ежедневном использовании в течение более длительного периода времени. Это означает, что в
                        долгосрочной перспективе вы можете сэкономить деньги, инвестируя в бытовую технику, поскольку
                        вам не придется заменять ее так часто, как в случае с более низкокачественным вариантом.</p>
                </Container>
            </section>

            <section className="product-section py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} lg={6} className="mb-4 mb-lg-0">
                            <img src={stiralka} alt="Стиральная машина" className="img-fluid"/>
                        </Col>
                        <Col xs={12} lg={6}>
                            <h2 className="title_name">INstek 459</h2>
                            <p className="title_under">Стиральная машина</p>
                            <p className="title-text-under">Наша собственная разработка - стиральная машина INDESIT IWSD
                                51051 CIS с 13 программами и полезными режимами. Умеет отстирывать шерсть, хлопок,
                                синтетику, джинсовую ткань, а также обувь. Загрузка грязного белья производится
                                фронтально. Управление осуществляется электронно-механическими системами. Самая большая
                                скорость отжима составляет 1000 об/мин и этого достаточно, чтобы после стирки получить
                                сухие вещи.</p>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item">Основные характеристики:</li>
                                <li className="list-group-item">Бренд INDESIT</li>
                                <li className="list-group-item">Модель IWSD 51051 CIS</li>
                                <li className="list-group-item">Тип загрузки фронтальная</li>
                                <li className="list-group-item">Максимальная загрузка 5 кг</li>
                                <li className="list-group-item">Максимальная скорость отжима 1000 об/мин</li>
                                <li className="list-group-item">Температура 30 - 90 °C</li>
                                <li className="list-group-item">Класс стирки A</li>
                                <li className="list-group-item">Расход воды 44 л</li>
                                <li className="list-group-item">Количество программ 13</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="why-us-section py-5 bg-light">
                <Container>
                    <div className="block-title text-center mb-4">
                        <h2>Почему нас выбирают</h2>
                        <p>Тысячи счастливых покупателей</p>
                    </div>
                    <Row>
                        <Col xs={12} md={3} className="mb-4">
                            <div className="how-to-card text-center">
                                <div className="card-image mb-3">
                                    <img src={gift} alt="Бесплатное хранение и подключение"/>
                                </div>
                                <h3>Бесплатное хранение и подключение</h3>
                                <p>Дарим подарки и скидки до 70% всем покупателям</p>
                            </div>
                        </Col>
                        <Col xs={12} md={3} className="mb-4">
                            <div className="how-to-card text-center">
                                <div className="card-image mb-3">
                                    <img src={ok} alt="Официальная гарантия"/>
                                </div>
                                <h3>Официальная гарантия</h3>
                                <p>Соответствуем требованиям и стандартам качества</p>
                            </div>
                        </Col>
                        <Col xs={12} md={3} className="mb-4">
                            <div className="how-to-card text-center">
                                <div className="card-image mb-3">
                                    <img src={support} alt="Квалифицированные консультанты"/>
                                </div>
                                <h3>Квалифицированные консультанты</h3>
                                <p>Отвечаем на вопросы покупателей в течение 10 минут</p>
                            </div>
                        </Col>
                        <Col xs={12} md={3} className="mb-4">
                            <div className="how-to-card text-center">
                                <div className="card-image mb-3">
                                    <img src={like} alt="Лучшие проверенные бренды"/>
                                </div>
                                <h3>Лучшие проверенные бренды</h3>
                                <p>Лучшее предложение цены и качества</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="sosal py-5">
                <Container>
                    <div className="text-center mb-4">
                        <h2>Оставьте заявку и мы подробно проконсультируем вас по условиям</h2>
                    </div>
                    <div className="text-center">
                        <Button className="btn-lg yellow-button mb-2" onClick={handleShow}>
                            Оставить заявку
                        </Button>
                        <div className="btn_descr">Мы перезвоним через 15 минут</div>
                    </div>
                </Container>
            </section>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Оставьте заявку на сайте, и мы с вами свяжемся</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Введите имя</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Введите имя"
                            />
                            <Form.Control.Feedback type="invalid">
                                Пожалуйста, введите имя.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Введите E-mail</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="mail@mail.ru"
                            />
                            <Form.Control.Feedback type="invalid">
                                Пожалуйста, введите корректный E-mail.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Введите номер телефона</Form.Label>
                            <InputMask
                                mask="7-999-999-99-99"
                                maskChar=" "
                                className="form-control"
                                required
                                placeholder="x-xxx-xxx-xx-xx"
                            />
                            <Form.Control.Feedback type="invalid">
                                Пожалуйста, введите номер телефона в формате xxx-xxx-xxx.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="warning" type="submit" className="w-100">
                            Оставить заявку
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <p>Нажимая на кнопку, Вы принимаете Положение и Согласие на обработку персональных данных.</p>
                </Modal.Footer>
            </Modal>
            <section className="good-sriralka py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} lg={6} className="mb-4 mb-lg-0">
                            <img src={womanStiraet} alt="Женщинаи стиральная машина" className="img-fluid"/>
                        </Col>
                        <Col xs={12} lg={6}>
                            <h2 className="woman-title">Как выбрать хорошую стиральную машину?</h2>
                            <p className="woman-title-under">Выбор хорошей стиральной машины зависит от множества
                                факторов, включая тип устройства, характеристики и дополнительные функции. Одним из
                                ключевых аспектов является выбор между фронтальной и верхней загрузкой, в зависимости от
                                предпочтений по удобству и экономии пространства. Также стоит обратить внимание на
                                энергопотребление, класс стирки, отжима и шумовые характеристики. Современные стиральные
                                машины предлагают разнообразие программ для разных типов тканей и загрязнений, а также
                                дополнительные функции, такие как отложенный старт, паровая обработка и защита от детей.
                            </p>
                            <p className="woman-title-under">Не менее важными являются показатели долговечности и
                                надежности. Модели с инверторными моторами, как правило, более тихие и
                                энергоэффективные, а также имеют более длительный срок службы. Важно также учитывать
                                бренды и отзывы пользователей, чтобы выбрать модель, которая сочетает в себе оптимальные
                                цены и качественные характеристики. Не забывайте про гарантию и сервисное обслуживание,
                                что особенно важно для долговечности устройства.
                            </p>

                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about-us py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} lg={6} className="mb-4 mb-lg-0">
                            <div className="company-info">
                                <h2 className="text-title">О компании</h2>
                                <p>Наша компания является оригинальным поставщиком Российских брендов встраиваемой
                                    бытовой техники и товаров для дома.</p>
                                <p>Мы работаем в сегменте розничной и оптовой продажи бытовой техники и товаров для
                                    дома, и имеем профессиональный штат специалистов, готовых помочь покупателю и дать
                                    самую грамотную консультацию при выборе техники.</p>

                                <h3 className="sub-title">Наши преимущества:</h3>
                                <ul className="advantages-list">
                                    <li>Полный ассортимент бытовой техники</li>
                                    <li>Регулярные поставки товара и поддержание складской программы.</li>
                                    <li>Предлагаем гибкую систему скидок для дизайнеров и постоянных покупателей.</li>
                                    <li>Работаем под заказ по конкретным моделям из представленных брендов.</li>
                                    <li>Осуществляем доставку, ориентированную на пожелания клиента по дате и времени.
                                    </li>
                                    <li>Предоставляем гарантию на всю продукцию от производителя.</li>
                                    <li>На нашем сайте предложены товары по честным и конкурентным ценам.</li>
                                    <li>На постоянной основе проводятся акции для наших покупателей.</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <img src={man} alt="Женщинаи стиральная машина" className="img-fluid"/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="photo-gallery">
                <div className="block-title text-center mb-4">
                    <h2>Фотогалерея магазина</h2>
                    <p>Мы всегда рады нашим покупателям</p>
                </div>
                <Container>
                    <Row className="justify-content-center g-0">
                        <Col xs={12} md={4} className="mb-2 d-flex justify-content-center">
                            <img src={img1} alt="Картинка1" className="img-fluid"/>
                        </Col>
                        <Col xs={12} md={4} className="mb-2 d-flex justify-content-center">
                            <img src={img2} alt="Картинка2" className="img-fluid"/>
                        </Col>
                        <Col xs={12} md={4} className="mb-2 d-flex justify-content-center">
                            <img src={img3} alt="Картинка3" className="img-fluid"/>
                        </Col>
                    </Row>
                    <Row className="justify-content-center g-0">
                        <Col xs={12} md={4} className="mb-2 d-flex justify-content-center">
                            <img src={img4} alt="Картинка4" className="img-fluid"/>
                        </Col>
                        <Col xs={12} md={4} className="mb-2 d-flex justify-content-center">
                            <img src={img5} alt="Картинка5" className="img-fluid"/>
                        </Col>
                        <Col xs={12} md={4} className="mb-2 d-flex justify-content-center">
                            <img src={img6} alt="Картинка6" className="img-fluid"/>
                        </Col>
                    </Row>
                </Container>
            </section>

        </main>
    );
};

export default HomePage;

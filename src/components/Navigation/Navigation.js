import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Form, Offcanvas } from 'react-bootstrap';
import './Navigation.css';
import logo from '../../assets/icon/logo.png';
import cart_logo from '../../assets/icon/cart_icon.png';
import { useCart } from './../CartContext'; // Импортируем контекст корзины

const Navigation = () => {
    const [show, setShow] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('+7 ');
    const [isValid, setIsValid] = useState(false);
    const [showSmsInput, setShowSmsInput] = useState(false);
    const [cartVisible, setCartVisible] = useState(false);
    const { cartItems, removeFromCart } = useCart(); // Используем контекст корзины

    const handleClose = () => {
        setShow(false);
        setPhoneNumber('+7 ');
        setIsValid(false);
        setShowSmsInput(false);
    };

    const handleShow = () => setShow(true);

    const formatPhoneNumber = (value) => {
        const digits = value.replace(/\D/g, '');
        const formattedNumber = digits.length <= 1 ? '+7' : `+7 ${digits.slice(1, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 9)} ${digits.slice(9, 11)}`;
        return formattedNumber.trim();
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        const cleanedValue = formatPhoneNumber(value);
        setPhoneNumber(cleanedValue);
        const digits = cleanedValue.replace(/\D/g, '');
        setIsValid(digits.length === 11);
    };

    const handleGetSmsCode = () => {
        if (isValid) {
            setShowSmsInput(true);
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="nav-link" to="/">
                        <a className="navbar-brand d-flex align-items-center" href="#">
                            <img src={logo} alt="Логотип" width="64" height="64" className="d-inline-block" />
                            <span className="ms-2">QuantumGadget</span>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Переключатель навигации">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Главная</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/catalog">Каталог товаров</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="AU">О Нас</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ConUs">Контакты</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="PAD">Оплата и доставка</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="faq">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#" onClick={handleShow}>Войти</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link cart-link" href="#" onClick={() => setCartVisible(true)}>
                                    <span className="icon-wrapper">
                                        <img src={cart_logo} alt="Корзина" />
                                        {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Войти/Зарегистрироваться</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Телефон</Form.Label>
                            <div className="d-flex align-items-center">
                                <Form.Control
                                    type="text"
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                    className="border-0 border-bottom flex-grow-1"
                                    style={{ boxShadow: 'none', backgroundColor: showSmsInput ? 'rgba(0, 0, 0, 0.1)' : 'white' }}
                                    readOnly={showSmsInput}
                                />
                                {isValid && !showSmsInput && <span className="text-success ms-2">✔</span>}
                            </div>
                            <Form.Text className="text-muted">Поле должно содержать 11 цифр.</Form.Text>
                        </Form.Group>
                        {isValid && !showSmsInput && (
                            <Button variant="primary" className="mt-3" block onClick={handleGetSmsCode}>
                                Получить SMS код
                            </Button>
                        )}
                        {showSmsInput && (
                            <Form.Group controlId="formSmsCode" className="mt-3">
                                <Form.Label>Введите SMS код</Form.Label>
                                <div className="d-flex align-items-center">
                                    <Form.Control
                                        type="text"
                                        className="border-0 border-bottom flex-grow-1"
                                        style={{ boxShadow: 'none' }}
                                    />
                                </div>
                            </Form.Group>
                        )}
                    </Form>
                </Modal.Body>
            </Modal>

            <Offcanvas show={cartVisible} onHide={() => setCartVisible(false)} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Корзина</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cartItems.length > 0 ? (
                        <ul className="list-group">
                            {cartItems.map((item, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        <strong>{item.name}</strong> - {item.price} ₽
                                    </div>
                                    <Button variant="danger" size="sm" onClick={() => removeFromCart(item)}>
                                        Удалить
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Корзина пуста</p>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Navigation;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button, Form, Offcanvas } from 'react-bootstrap';
import './Navigation.css';
import logo from '../../assets/icon/logo.png';
import cart_logo from '../../assets/icon/cart_icon.png';
import { useCart } from '../CartContext';

const Navigation = () => {
    const [show, setShow] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('+7 ');
    const [isValid, setIsValid] = useState(false);
    const [showSmsInput, setShowSmsInput] = useState(false);
    const [cartVisible, setCartVisible] = useState(false);
    const { cartItems, removeFromCart, getTotalPrice } = useCart(); // Получаем функции из контекста
    const navigate = useNavigate();

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

    const handleRemoveFromCart = (index) => {
        removeFromCart(index);
    };
    const handleCheckout = () => {
        setCartVisible(false);
        navigate('/checkout');
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="nav-link" to="/">
                        <a className="navbar-brand d-flex align-items-center" href="#">
                            <img src={logo} alt="Логотип" width="64" height="64" className="d-inline-block"/>
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
                                <span className="nav-link cart-link" onClick={() => setCartVisible(true)}>
                                    <span className="icon-wrapper">
                                        <img src={cart_logo} alt="Корзина"/>
                                        {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Окно для входа */}
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
                                Получить код
                            </Button>
                        )}
                        {showSmsInput && (
                            <Form.Group controlId="formSmsCode" className="mt-3">
                                <Form.Label>Код из SMS</Form.Label>
                                <Form.Control type="text" placeholder="Введите код" />
                            </Form.Group>
                        )}
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Окно корзины */}
            {/* Окно корзины */}
            <Offcanvas show={cartVisible} onHide={() => setCartVisible(false)} placement="end" className="cart-offcanvas">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Корзина</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cartItems.length === 0 ? (
                        <p className="text-center">Ваша корзина пуста</p>
                    ) : (
                        <div>
                            {cartItems.map((item, index) => (
                                <div key={index} className="cart-item">
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="cart-item-image"
                                        />
                                        <div className="ms-3">
                                            <h5 className="cart-item-name">{item.name}</h5>
                                            <p className="cart-item-price">{item.price}₽ × {item.quantity}</p>
                                        </div>
                                        <button
                                            className="cart-item-remove"
                                            onClick={() => handleRemoveFromCart(index)}
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className="cart-total mt-3 text-end">
                                <h4>Общая сумма: {getTotalPrice()}₽</h4>
                                <button className="btn btn-success mt-2 w-100" onClick={handleCheckout}>Перейти к оформлению</button>
                            </div>
                        </div>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Navigation;

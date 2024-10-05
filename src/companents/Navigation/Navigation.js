import React from 'react';
import './Navigation.css'; // Исправлено: добавлено './' перед именем файла
import logo from '../../assets/icon/logo.png'
import cart_logo from '../../assets/icon/cart-icon.png'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={logo} alt="Логотип" width="64" height="64" className="d-inline-block" />
                    <span className="ms-2">QuantumGadget</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 justify-content-start">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Главная</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ссылка</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Другое</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Контакты</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src={cart_logo}/>
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex ms-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск" />
                        <button className="btn btn-outline-success" type="submit">Поиск</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

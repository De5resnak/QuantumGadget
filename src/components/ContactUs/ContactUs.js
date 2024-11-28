import React from 'react';
import './ContacUs.css';
import mapImage from '../../assets/images/maps.png';

const ContacUs = () => {
    return (
        <main>
            <section className="contact-us">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-12 col-lg-7 ">
                            <h1>Свяжитесь с нами</h1>
                            <p>Напишите нам, позвоните или заполните форму, чтобы узнать, как <br /> поддержка может решить вашу проблему с сообщениями.</p>
                            <p>support@quantumgadget.ru</p>
                            <p>8 800 123 45 67</p>
                            <p style={{ textDecoration: 'underline', color: 'black' }}>Поддержка клиентов</p>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="form-back">
                                <h3>Свяжитесь с нами</h3>
                                <p>Вы можете связаться с нами в любое время</p>
                                <form>
                                    <div className="row g-4">
                                        <div className="col-6 mb-3">
                                            <label htmlFor="fname" className="form-label">Имя</label>
                                            <input type="text" className="form-control" id="fname" placeholder="Петр" />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label htmlFor="lname" className="form-label">Фамилия</label>
                                            <input type="text" className="form-control" id="lname" placeholder="Дудкин" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="example@quantumgadget.ru" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Телефон</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="+7 (989) 123-45-67" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Сообщение</label>
                                        <textarea className="form-control" id="message" rows="3" placeholder="Как мы можем вам помочь?"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Отправить</button>
                                    <div className="col-md-12">
                                        This site is protected by reCAPTCHA and the Google
                                        <a href="https://policies.google.com/privacy">Privacy Policy</a> and
                                        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="maps-location">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-12 col-lg-6">
                            <div className="contact-map">
                                <img src={mapImage} alt="Map" className="map-style"/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="maps-title">
                                <span>Наше местоположение</span>
                                <h2>Расположение офиса</h2>
                            </div>
                            <div className="maps-text">
                                <h5>Штаб-квартира</h5>
                                <p>QuantumGadget Inc.</p>
                                <p>Россия</p>
                                <p>ул. Красная 2341</p>
                                <p>Краснодар</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContacUs;

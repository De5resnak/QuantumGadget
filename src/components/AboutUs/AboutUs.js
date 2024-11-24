import React from 'react';
import './AboutUs.css';
import woman from '../../assets/images/women.jpg';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';

const AboutUs = () => {
    return (
        <main className="about-us">
            <section className="section about-company">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">О нашей компании</h2>
                    </div>
                    <div className="section-content">
                        <p>
                            Мы — онлайн магазин бытовой техники, предоставляющий своим клиентам широкий выбор качественных товаров для дома по доступным ценам. Наша цель — сделать покупку бытовой техники удобной и выгодной для каждого клиента. Мы стремимся предложить современные решения для дома, обеспечивая удобную доставку, гарантию и сервисное обслуживание.
                        </p>
                        <p>
                            Наши специалисты постоянно отслеживают новинки рынка, чтобы предложить вам только лучшие продукты. Мы ценим доверие наших клиентов и всегда готовы помочь в выборе техники для вашего дома. У нас вы найдете всё, что нужно для создания комфорта и уюта: от современной кухонной техники до устройств для поддержания чистоты.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section company-values">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image-container">
                                <img src={woman} alt="Company" className="image"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section-content">
                                <p>
                                    Мы тщательно отбираем товары, работаем только с проверенными брендами и гарантируем
                                    качественное обслуживание на каждом этапе покупки. Удобный интерфейс, быстрое
                                    оформление заказа и доставка на дом — всё, чтобы сделать покупку максимально
                                    приятной и удобной.
                                </p>
                                <p>
                                    В нашем ассортименте только самые надежные и эффективные устройства, которые прошли
                                    строгий контроль качества. Мы уверены в каждой модели, поэтому предоставляем
                                    подробные характеристики и отзывы, чтобы вы могли выбрать лучшее для своего дома.
                                    Наши клиенты могут рассчитывать на помощь консультантов, которые всегда готовы дать
                                    советы по выбору и предоставить информацию о каждой покупке.
                                </p>
                                <p>
                                    Важно, что мы всегда стараемся предлагать выгодные акции и скидки, делая покупку
                                    бытовой техники еще более доступной. Наши условия доставки гибкие, и вы всегда
                                    можете быть уверены, что заказ будет доставлен вовремя и в полном объеме. Мы
                                    стремимся создать для вас идеальные условия для покупки техники, которая сделает ваш
                                    дом комфортнее.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section company-gallery">
                <div className="container">
                    <div className="gallery">
                        <div className="gallery-item">
                            <img src={img1} alt="Gallery Image" className="gallery-image"/>
                        </div>
                        <div className="gallery-item">
                            <img src={img2} alt="Gallery Image" className="gallery-image"/>
                        </div>
                        <div className="gallery-item">
                            <img src={img3} alt="Gallery Image" className="gallery-image"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;

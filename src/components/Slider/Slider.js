import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css'; // Импортируем CSS файл для слайдера
import silderimage1 from '../../assets/images/sliderimage1.jpg';
import silderimage2 from '../../assets/images/bubaa2.jpg';
import silderimage3 from '../../assets/images/buba3.jpg';

const Slider = () => {
    return (
        <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={silderimage1} className="d-block w-100" alt="Слайд 1"/>
                    </div>
                    <div className="carousel-item">
                        <img src={silderimage2} className="d-block w-100" alt="Слайд 2"/>
                    </div>
                    <div className="carousel-item">
                        <img src={silderimage3} className="d-block w-100" alt="Слайд 3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Следующий</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;

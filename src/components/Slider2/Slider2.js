import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Slider2.css';

const Slider2 = ({ images, openModal }) => {
    return (
        <Carousel>
            {images.map((img, idx) => (
                <Carousel.Item key={idx}>
                    <img
                        className="d-block w-100"
                        src={img.image}
                        alt={`slide ${idx}`}
                        onClick={() => openModal(img.image)}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Slider2;

import React from 'react';
import './product-card.css';
import {Container} from "react-bootstrap";

const ProductCard = ({ product }) => {
    const imageUrl = product.images.length > 0 ? product.images[0].image : 'default-image-url'; // Убедитесь, что указали URL по умолчанию
    return (
        <div className="card product-card">
            <a href={`/products/${product.id}`} className="image-link">
                <Container>
                    <img src={imageUrl} className="card-img-top img-fluid style-image text-center" alt={product.name}/>
                </Container>
            </a>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.short_description}</p>
                <div className="mt-auto">
                    <p className="card-text price">Цена: {product.price} руб.</p>
                    <a href={`/products/${product.id}`} className="btn btn-primary my-button ">Перейти на страничку товара</a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

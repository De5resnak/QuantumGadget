import React from 'react';
import './product-card.css';

const ProductCard = ({ product }) => {
    return (
        <div className="card mb-4">
            <img src={product.imageUrl} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <a href={`/products/${product.id}`} className="btn btn-primary my-button">Перейти на страничку товара</a>
            </div>
        </div>
    );
};

export default ProductCard;

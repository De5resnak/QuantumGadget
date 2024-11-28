import React from 'react';
import './product-card.css';

const ProductCard = ({ product }) => {
    // Проверяем, что объект продукта определен и имеет массив images
    if (!product || !product.images || product.images.length === 0) {
        return <div>Данные продукта отсутствуют или неполны</div>;
    }

    return (
        <div className="card mb-4 product-card">
            <img src={product.images[0].image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.short_description}</p>
                <p className="card-text">Цена: {product.price} руб.</p> {/* Добавление цены */}
                <a href={`/products/${product.id}`} className="btn btn-primary my-button">Перейти на страничку товара</a>
            </div>
        </div>
    );
};

export default ProductCard;

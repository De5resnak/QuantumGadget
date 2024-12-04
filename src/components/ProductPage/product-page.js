import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './product-page.css';
import Slider2 from "../Slider2/Slider2";
import { useCart } from '../CartContext'; // Импортируйте useCart для работы с корзиной
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const { addToCart } = useCart(); // Получите addToCart из контекста корзины

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/catalog/${productId}/`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Ошибка при запросе товара:', error);
                setLoading(false);
            });
    }, [productId]);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (loading) return <div>Загрузка...</div>;
    if (!product) return <div>Товар не найден.</div>;
    const handleAddToCart = () => {
        // Добавляем товар в корзину, передаем только первое изображение
        addToCart({
            id: product.id,
            name: product.name,
            image: product.images[0]?.image, // Передаем только первое изображение
            price: product.price,
        });
    };
    // Определение отображаемых характеристик
    const displayAttributes = [
        { key: 'material', label: 'Материал' },
        { key: 'weight', label: 'Вес', unit: ' кг' },
        { key: 'size', label: 'Размеры' },
        // Добавьте другие характеристики, которые нужно отображать
    ];

    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <Slider2 images={product.images} openModal={openModal} />
                </div>
                <div className="col-md-6">
                    <h1>{product.name}</h1>
                    <p className="text-muted">Бренд: {product.brand}</p>
                    <div className="d-flex align-items-center mb-3">
                        {product.old_price && (
                            <span className="text-decoration-line-through text-muted me-2">
                                {product.old_price} руб.
                            </span>
                        )}
                        <span className="fs-3 text-danger">{product.price} руб.</span>
                    </div>
                    <button
                        className="btn btn-warning btn-lg mb-3"
                        onClick={() => handleAddToCart(product.id)} // Используйте addToCart из контекста
                    >
                        В корзину
                    </button>
                    <ul className="list-unstyled">
                        {displayAttributes.map(attr => (
                            product[attr.key] && (
                                <li key={attr.key}>
                                    <strong>{attr.label}:</strong> {product[attr.key]}{attr.unit || ''}
                                </li>
                            )
                        ))}
                    </ul>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <h3>Описание</h3>
                    <p>{product.full_description}</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <h3>Подробные характеристики</h3>
                    <ul className="list-group">
                        {Object.entries(product).map(([key, value]) => (
                            value &&
                            key !== 'id' &&
                            key !== 'type' &&
                            key !== 'trending' &&
                            key !== 'name' &&
                            key !== 'brand' &&
                            key !== 'short_description' &&
                            key !== 'price' &&
                            key !== 'in_stock' &&
                            key !== 'material' &&
                            key !== 'weight' &&
                            key !== 'full_description' &&
                            key !== 'size' &&
                            key !== 'images' && (
                                <li key={key} className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="text-capitalize">{key.replace(/_/g, ' ')}:</span>
                                    <span>{value.toString()}</span>
                                </li>
                            )
                        ))}
                    </ul>
                </div>
            </div>

            {/* Модальное окно для увеличенной картинки */}
            {isModalOpen && (
                <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" onClick={closeModal}>
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <img
                                    src={selectedImage}
                                    alt="Full size"
                                    className="img-fluid"
                                    style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProductPage;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../Slider2/Slider2'; // Импортируем слайдер
import './product-page.css';
import Slider2 from "../Slider2/Slider2"; // Импортируем кастомные стили

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`/products.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }
                return response.json();
            })
            .then(data => {
                setProduct(data[0]);
                setLoading(false);
            })
            .catch(error => {
                setError('Не удалось загрузить данные товара');
                setLoading(false);
            });
    }, [productId]);

    if (loading) {
        return <div className="loading">Загрузка...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="container product-page">
            <div className="row">
                {/* Левая колонка */}
                <div className="col-md-6 product-info">
                    <h1 className="product-title">{product.name}</h1>
                    <p className="brand"><strong>Бренд:</strong> {product.brand}</p>
                    <p className={`availability ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                        {product.inStock ? 'В наличии' : 'Нет в наличии'}
                    </p>
                    <p className="short-description">{product.shortDescription}</p>
                    <h2 className="price">{product.price} ₽</h2>
                    <button className="btn btn-primary">В корзину</button>

                    <h3 className="section-title">О товаре</h3>
                    <ul className="product-details">
                        <li><strong>Производитель:</strong> {product.manufacturer}</li>
                        <li><strong>Материал:</strong> {product.material}</li>
                        <li><strong>Габариты:</strong> {product.dimensions}</li>
                        <li><strong>Вес:</strong> {product.weight}</li>
                    </ul>
                </div>

                {/* Правая колонка с изображениями */}
                <div className="col-md-6">
                    <Slider2 images={product.images} />
                </div>
            </div>

            {/* Основное описание товара */}
            <div className="row mt-5">
                <div className="col">
                    <h3 className="section-title">Описание</h3>
                    <p className="full-description">{product.description}</p>

                    {/* Подробные характеристики */}
                    <h4 className="section-title">Подробные характеристики</h4>
                    <table className="table table-bordered">
                        <tbody>
                        <tr>
                            <th>Модель</th>
                            <td>{product.model}</td>
                        </tr>
                        <tr>
                            <th>Мощность</th>
                            <td>{product.power}</td>
                        </tr>
                        <tr>
                            <th>Фильтр</th>
                            <td>{product.filter}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;

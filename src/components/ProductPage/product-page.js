import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider2 from '../Slider2/Slider2';
import axios from '../api';
import './product-page.css';

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/catalog/all/`);
                const productData = response.data.find(item => item.id === parseInt(productId));
                if (!productData) {
                    setError('Товар не найден');
                } else {
                    setProduct(productData);
                }
                setLoading(false);
            } catch (error) {
                setError('Не удалось загрузить данные товара');
                setLoading(false);
            }
        };

        fetchProduct();
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
                <div className="col-md-6 product-info">
                    <h1 className="product-title">{product.name}</h1>
                    <p className="brand"><strong>Бренд:</strong> {product.brand}</p>
                    <p className={`availability ${product.in_stock ? 'in-stock' : 'out-of-stock'}`}>
                        {product.in_stock ? 'В наличии' : 'Нет в наличии'}
                    </p>
                    <p className="short-description">{product.short_description}</p>
                    <h2 className="price">{product.price} ₽</h2>
                    <button className="btn btn-primary">В корзину</button>

                    <h3 className="section-title">О товаре</h3>
                    <ul className="product-details">
                        <li><strong>Материал:</strong> {product.material}</li>
                        <li><strong>Вес:</strong> {product.weight} кг</li>
                        <li><strong>Габариты:</strong> {product.size}</li>
                        <li><strong>Потребляемая мощность:</strong> {product.power}</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <Slider2 images={product.images.map(img => img.image)} />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <h3 className="section-title">Описание</h3>
                    <p className="full-description">{product.full_description}</p>

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

import React, { useState, useEffect } from 'react';
import ProductCard from './product-card';
import axios from '../api'; // Обновите путь до вашего API

const ProductList = ({ sortOption }) => {
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
        // Обновите URL API на соответствующую конечную точку
        axios.get('/catalog/all/')
            .then(response => {
                setProducts(response.data);
                setSortedProducts(response.data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        let sorted = [...products];
        if (sortOption === 'cheap-first') {
            sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (sortOption === 'expensive-first') {
            sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        }
        setSortedProducts(sorted);
    }, [sortOption, products]);

    return (
        <div className="container">
            <div className="row">
                {sortedProducts.map(product => (
                    <div className="col-md-4" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

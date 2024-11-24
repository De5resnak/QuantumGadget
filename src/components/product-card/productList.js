import React, { useState, useEffect } from 'react';
import ProductCard from './product-card';

const ProductList = ({ sortOption }) => {
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setSortedProducts(data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        let sorted = [...products];
        if (sortOption === 'cheap-first') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'expensive-first') {
            sorted.sort((a, b) => b.price - a.price);
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

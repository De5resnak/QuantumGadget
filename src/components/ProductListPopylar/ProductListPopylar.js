import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../product-card/product-card';
import '../product-card/product-card.css';


const ProductListPopylar = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 6; // Количество продуктов на страницу

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/catalog/trending/')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const offset = currentPage * productsPerPage;
    const currentProducts = products.slice(offset, offset + productsPerPage);


    return (
        <div>
            <div className="container">
                <div className="row">
                    {currentProducts.map(product => (
                        <div key={product.id} className="col-12 col-md-4 d-flex justify-content-center mb-4">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductListPopylar;

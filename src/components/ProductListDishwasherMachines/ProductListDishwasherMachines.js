import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../product-card/product-card';
import '../product-card/product-card.css';
import ReactPaginate from 'react-paginate';
import '../product-card/pagination.css'; // Подключение стилей для пагинации

const ProductListDishwasherMachines = ({ sortOption }) => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 6; // Количество продуктов на страницу

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/catalog/dishwashers/')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const sortProducts = (products, sortOption) => {
        switch (sortOption) {
            case 'cheap-first':
                return products.slice().sort((a, b) => a.price - b.price);
            case 'expensive-first':
                return products.slice().sort((a, b) => b.price - a.price);
            default:
                return products;
        }
    };

    const sortedProducts = sortProducts(products, sortOption);
    const offset = currentPage * productsPerPage;
    const currentProducts = sortedProducts.slice(offset, offset + productsPerPage);
    const pageCount = Math.ceil(sortedProducts.length / productsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

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
            <ReactPaginate
                previousLabel={"←"}
                nextLabel={"→"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination-widget__pages"}
                pageClassName={"pagination-widget__page"}
                pageLinkClassName={"pagination-widget__page-link"}
                activeClassName={"pagination-widget__page_active"}
                previousClassName={"pagination-widget__page"}
                nextClassName={"pagination-widget__page"}
                disabledClassName={"pagination-widget__page_disabled"}
                activeLinkClassName={"pagination-widget__page-link_active"}
            />
        </div>
    );
};

export default ProductListDishwasherMachines;

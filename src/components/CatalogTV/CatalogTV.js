import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductList from "../product-card/productList";
import { Link, useLocation } from "react-router-dom";
import './CatalogTV.css';

const CatalogTV = () => {
    const location = useLocation();
    const [sortOption, setSortOption] = useState('default');

    const categories = [
        { name: "Все категории", path: "/catalog" },
        { name: "Стиральные машины", path: "/washing-machines" },
        { name: "Телевизоры", path: "/tv" },
        { name: "Техника для уборки", path: "/cleaning-equipment" },
        { name: "Посудомоечная машина", path: "/dishwashers" },
    ];

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    return (
        <section className='catalog-page'>
            <Container>
                <div className="catalog-head">
                    <h1>Каталог товаров</h1>
                    <p>
                        <Link to="/" className="text-decoration-none custom-hover">Главная</Link>
                        {" / "}
                        <Link to="/catalog" className="text-decoration-none custom-hover">Каталог товаров</Link>
                        {" / "}
                        <Link to="/tv" className="text-decoration-none custom-hover">Телевизоры</Link>
                    </p>
                    <div className="sort-dropdown">
                        <label htmlFor="sort-select">Сортировать:</label>
                        <select id="sort-select" value={sortOption} onChange={handleSortChange}>
                            <option value="default">По умолчанию</option>
                            <option value="cheap-first">Сначала дешевле</option>
                            <option value="expensive-first">Сначала дороже</option>
                        </select>
                    </div>
                </div>
            </Container>
            <section className="catalog-main">
                <Container>
                    <Row>
                        <Col xs={12} md={3}>
                            <div className="category-list">
                                <div className="list-group">
                                    {categories.map((category, index) => (
                                        <Link
                                            key={index}
                                            to={category.path}
                                            className={`list-group-item list-group-item-action ${location.pathname === category.path ? "active" : ""}`}
                                        >
                                            {category.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={9}>
                            <ProductList sortOption={sortOption} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </section>
    );
};

export default CatalogTV;

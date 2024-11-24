import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import ProductList from "../product-card/productList";
import { Link, useLocation } from "react-router-dom";
import './CatalogPage.css';

const CatalogPage = () => {
    const location = useLocation(); // Получаем текущий путь
    const categories = [
        { name: "Стиральные машины", path: "/washing-machines" },
        { name: "Телевизоры", path: "/tv" },
        { name: "Техника для уборки", path: "/cleaning-equipment" },
        { name: "Посудомоечная машина", path: "/dishwashers" },
    ];

    return (
        <section className='catalog-page'>
            <Container>
                <div className="catalog-head">
                    <h1>Каталог товаров</h1>
                    <p>
                        <Link to="/" className="text-decoration-none custom-hover">Главная</Link>
                        {" / "}
                        <Link to="/catalog" className="text-decoration-none custom-hover">Каталог товаров</Link>
                    </p>
                </div>
            </Container>
            <section className="catalog-main">
                <Container>
                    <Row>
                        <Col xs={12} md={3}>
                            <div className="category-list">
                                <div className="list-group">
                                    <Link
                                        to="/catalog"
                                        className={`list-group-item list-group-item-action ${location.pathname === "/catalog" ? "active" : ""}`}
                                        aria-current="true"
                                    >
                                        Все категории
                                    </Link>
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
                            <ProductList/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </section>
    );
};

export default CatalogPage;

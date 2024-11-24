import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomePage/HomePage';
import FaqPage from './components/FaqPage/FaqPage';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import PayAndDelivery from './components/PayAndDelivery/PayAndDelivery';
import AboutUs from './components/AboutUs/AboutUs';
import ProductList from './components/product-card/productList';
import ProductPage from './components/ProductPage/product-page';
import CatalogPage from './components/CatalogPage/CatalogPage';
import CatalogWashingMachines from './components/CatalogWashingMachines/CatalogWashingMachines';
import CatalogTV from './components/CatalogTV/CatalogTV';
import CatalogTechForClean from './components/CatalogTechForClean/CatalogTechForClean';
import CatalogDishwasherMachines from './components/CatalogDishwasherMachines/CatalogDishwasherMachines';
import CartPage from './components/CartPage/CartPage';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    // Добавление товара в корзину
    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    // Загружаем корзину из localStorage при первом рендере
    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (savedCartItems) {
            setCartItems(savedCartItems);
        }
    }, []);

    // Сохраняем корзину в localStorage при изменении cartItems
    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }, [cartItems]);

    return (
        <Router>
            <Navigation cartItems={cartItems} addToCart={addToCart} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ConUs" element={<ContactUs />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/PAD" element={<PayAndDelivery />} />
                <Route path="/AU" element={<AboutUs />} />
                <Route path="/products" element={<ProductList addToCart={addToCart} />} />
                <Route path="/products/:productId" element={<ProductPage addToCart={addToCart} />} />
                <Route path="/catalog" element={<CatalogPage addToCart={addToCart} />} />
                <Route path="/washing-machines" element={<CatalogWashingMachines addToCart={addToCart} />} />
                <Route path="/tv" element={<CatalogTV addToCart={addToCart} />} />
                <Route path="/cleaning-equipment" element={<CatalogTechForClean addToCart={addToCart} />} />
                <Route path="/dishwashers" element={<CatalogDishwasherMachines addToCart={addToCart} />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

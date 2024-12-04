import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';  // Импортируем CartProvider
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
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import OrderConfirmationPage from "./components/CheckoutPage/OrderConfirmationPage";
import orderConfirmationPage from "./components/CheckoutPage/OrderConfirmationPage";

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/ConUs" element={<ContactUs />} />
                    <Route path="/faq" element={<FaqPage />} />
                    <Route path="/PAD" element={<PayAndDelivery />} />
                    <Route path="/AU" element={<AboutUs />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/products/:productId" element={<ProductPage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/washing-machines" element={<CatalogWashingMachines />} />
                    <Route path="/tv" element={<CatalogTV />} />
                    <Route path="/cleaning-equipment" element={<CatalogTechForClean />} />
                    <Route path="/dishwashers" element={<CatalogDishwasherMachines />} />
                    <Route path="/checkout" element={<CheckoutPage/>}/>
                    <Route path="/order-confirmation/:orderId" element={<OrderConfirmationPage />} />
                </Routes>
                <Footer />
            </Router>
        </CartProvider>
    );
};

export default App;

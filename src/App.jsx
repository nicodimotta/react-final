import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar.jsx';
import Contacto from './components/Contacto';
import { CartProvider } from './CartContext';

function App() {
    return (
        <Router>
            <CartProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<><Header /><ProductList /></>} />
                    <Route path="/product/:productId" element={<ProductDetail />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </CartProvider>
        </Router>
    );
}

export default App;









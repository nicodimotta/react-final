import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import ProductDetail from './components/ProductDetail'; // Asegúrate de crear este componente
import Navbar from './components/Navbar.jsx';
import Contacto from './components/Contacto';

function App() {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    const propsHeader = {
        allProducts,
        setAllProducts,
        total,
        setTotal,
        countProducts,
        setCountProducts
    };

    const propsProductList = {
        allProducts,
        setAllProducts,
        total,
        setTotal,
        countProducts,
        setCountProducts
    };

    return (
        <Router>
            <Navbar {...propsHeader} />
            <Routes>
                <Route path="/" element={<><Header {...propsHeader} /><ProductList {...propsProductList} /></>} />
                <Route path="/product/:productId" element={<ProductDetail {...propsProductList} />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </Router>
    );
}

export default App;








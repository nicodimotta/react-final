import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';

const Navbar = ({ allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal }) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1>Tienda de Mousepads</h1>
            </div>

            <div className="navbar-right">
                <Link to="/">Inicio</Link>
                <Link to="/contacto">Contacto</Link>
                <CartWidget 
                    allProducts={allProducts} 
                    setAllProducts={setAllProducts}
                    total={total}
                    countProducts={countProducts}
                    setCountProducts={setCountProducts}
                    setTotal={setTotal}
                />
            </div>
        </nav>
    );
}

export default Navbar;




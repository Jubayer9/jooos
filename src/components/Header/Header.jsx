import React from 'react';
import '../../../src/App.css'
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
                <img src={logo} alt="" />
            <div>
                <a href="/shop">shop</a>
                <a href="/oder">oder</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;
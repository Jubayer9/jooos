import React, { useContext } from 'react';
import '../../../src/App.css'
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {

    const { user, logout } = useContext(AuthContext)
    console.log(user);
    const handleLogout = () => {
        logout()
            .then(result => { })
            .catch(error => console.error(error));
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
                {
                    user && <span className='text-while'> <span className='Welcome'>Welcome</span> {user.email} <button onClick={handleLogout}>Log out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;
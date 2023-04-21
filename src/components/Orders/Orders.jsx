import React, { useState } from 'react';
import './Orders.css'
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const saveCart = useLoaderData();
    const [cart, satCart] = useState(saveCart)


    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        satCart(remaining);
        removeFromDb(id);
    }
    const handleClearCart = () => {
        satCart([])
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    handleClearCart={handleClearCart}
                    cart={cart}>
                    <Link className='proceed-link' to='/checkout'>
                        <button className='btn-proceed'>Proceed Checkout <FontAwesomeIcon icon={faCreditCard }/></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
import React, { useState } from 'react';
import './Orders.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const saveCart = useLoaderData();
    const [cart,satCart] =useState(saveCart)


const handleRemoveFromCart =(id)=>{
const remaining= cart.filter(product => product.id !==id);    
satCart(remaining);
removeFromDb(id);
 }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
    cart.map(product => <ReviewItem
    key={product.id}
    product={product}
    handleRemoveFromCart ={handleRemoveFromCart}
    ></ReviewItem> )
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;
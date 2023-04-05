import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Order.css'


const Orders = () => {
    const savedCart= useLoaderData();
    const [cart,setCart]=useState(savedCart)
    const handleRemoveCart=(id)=>{
        const remaining= cart.filter(product => product.id!=id)
        setCart(remaining)
        removeFromDb(id)
    }
    const handleClearCart=()=>{
        setCart([])
        deleteShoppingCart();
    }
    
    return (
        <div className='shop-container'>
            <div className='product-item'>
              

              {
               cart.map(product=> <ReviewCart
               key={product.id}
               product={product}
               handleRemoveCart={handleRemoveCart}
               ></ReviewCart>)
              }


            </div>
            <div className='cart-conatiner'>
            <Cart handleClearCart={handleClearCart} cart={cart}>
            <Link to="/checkout">
                <button className='btn-proced'>Proceed Checkout</button>
            </Link>
            </Cart>
            </div>
            
        </div>
    );
};

export default Orders;
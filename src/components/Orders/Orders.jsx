import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
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
            <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Orders;
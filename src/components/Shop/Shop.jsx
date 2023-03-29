import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products,setProducts]= useState([])
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('products.json').then(res=> res.json()).then(data => setProducts(data))
    },[])
    const handleButton=(product)=>{
        
        const newCart=[...cart,product]
        setCart(newCart)
        
    }
    return (
        <div className='shop-container'>

            <div className='product-container'>
            {
                products.map( product => <Product
                key={product.id}
                product={product}
                handleButton={handleButton}
                ></Product>)
            }
            </div>
            <div className='cart-container'>
            <p>select item:{cart.length}</p>

            </div>
            
        </div>
    );
};

export default Shop;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products,setProducts]= useState([])
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('products.json').then(res=> res.json()).then(data => setProducts(data))
    },[])

    useEffect(()=>{
        
        const storedCart=getShoppingCart()
        const  savedCart=[];

        //step 1: get id from store cart
        for(const id in storedCart){
            // step 2: get the product by using id
            const addProduct= products.find(product => product.id===id)
            console.log(addProduct)


           if(addProduct){
             // step 3: get quantity of the product
             const quantity=storedCart[id];

             addProduct.quantity=quantity

             // step 4: add the added product to the saved cart
             savedCart.push(addProduct)
           }
            

        }
        //step 5: set the cart
        setCart(savedCart)
    },[products])



    const handleButton=(product)=>{
        
        const newCart=[...cart,product]
        setCart(newCart)
        addToDb(product.id)

        
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
            <Cart cart={cart}></Cart>

            </div>
            
        </div>
    );
};

export default Shop;
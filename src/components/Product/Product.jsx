import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,price,seller,name,ratings,quantity}=props.product;

   const handleButton=props.handleButton
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h5>{name}</h5>
            <p>price:${price}</p>
            <p>manufactures:{seller}</p>
            <p>rating:{ratings}</p>
            </div>
            <button onClick={()=>handleButton(props.product)} className='btn'>Add to cart <FontAwesomeIcon icon={faShoppingCart} />
</button>
        </div>
        
    );
};

export default Product;
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const {cart}=props
    console.log(cart)

    let total=0;
    let shipping=0;
    let quantity=0;

    
    for(const product of cart){
        if(product.quantity===0){
            product.quantity=1;
        }
        total+=product.price*product.quantity;
        shipping+=product.shipping;
        quantity+=product.quantity
    }

    let tax=total*7/100;
    const grandTotal=tax+total+shipping;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>select item:{quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total : ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;
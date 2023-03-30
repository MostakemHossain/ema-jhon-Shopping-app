import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const {cart}=props
    console.log(cart)

    let total=0;
    let shipping=0;
    for(const product of cart){
        total+=product.price;
        shipping+=product.shipping;
    }

    let tax=total*7/100;
    const grandTotal=tax+total+shipping;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>select item:{cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total : ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;
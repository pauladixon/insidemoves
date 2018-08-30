import React from 'react';
import Cart from '../../components/Cart/Cart';
import CartItems from '../../components/CartItems/CartItems';
import './CheckoutPage.css';

const CheckoutPage = (props) => {
    return (
        <div className="CheckoutPage">
            <div className="CheckoutPage-cart">
                {props.cart && 
                    <Cart
                        cart={props.cart}
                        handleRemoveItem={props.handleRemoveItem}
                    />
                }
            </div>
        <div className="CheckoutPage-details">
            <h3> Order Summary</h3>
            <hr />
            {/* <p> {props.order.product.name}</p>      */}
                     
        </div>
        </div>
    );
}

export default CheckoutPage;

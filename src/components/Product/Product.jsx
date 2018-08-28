import React from 'react';
import './Product.css';

const Product = (props) => {
    return(
        <div>
            <article className="Product">
                 <div>
                    <h3> {props.product.name} </h3>
                </div>
                <p> {props.product.description} </p>
                <div>
                    <span>{props.product.sku}</span>
                    <span>{props.product.price}</span><br />
                    <button onClick={() => props.handleAddItem(props.product._id)} >ADD TO CART</button>
                </div>
            </article>
        </div>
    )
}

export default Product;
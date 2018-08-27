import React from 'react';
import './Product.css';

const Product = (props) => {
    return(
        <div>
            <article className="Product">
                <div>
                    {props.product.img}
                    <h3> {props.product.name} </h3>
                    <p> {props.product.description} </p>
                    <div>
                        <span>{props.product.sku}</span>
                        <button onClick={() => props.handleAddItem(props.product)} >ADD TO CART</button>
                        <span>{props.product.price}</span>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Product;
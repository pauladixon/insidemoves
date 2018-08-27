import React from 'react';
import { Link } from 'react-router-dom';
import './ShopButton.css';

const ShopButton = (props) => {
  return (
    <div className="ShopButton">
        <Link to="/shop" className="ShopButton">Shop Now</Link>
    </div>
  );
}

export default ShopButton;

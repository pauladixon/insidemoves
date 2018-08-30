import React from 'react';
import './SidePanel.css';


const SidePanel = (props) => {

    return(
        <div className='SidePanel'>
            Find By:
            <hr/>
            Brand 
            <button onClick={() => props.filterByBrand('nike')}> Nike </button>
            <p className="Brand-list-text">&nbsp;&nbsp;&nbsp;&nbsp;Jordans</p>
            <p className="Brand-list-text">&nbsp;&nbsp;&nbsp;&nbsp;Yeezy</p>
            <p className="Brand-list-text">&nbsp;&nbsp;&nbsp;&nbsp;Adidas</p>
            <p className="Brand-list-text">&nbsp;&nbsp;&nbsp;&nbsp;Vans</p>
            <br />
        </div>
    );
};

export default SidePanel;
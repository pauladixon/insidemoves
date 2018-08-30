import React from 'react';
import './LandingPage.css';
import ShopButton from '../../components/ShopButton/ShopButton'
import LandingBanner from '../../components/LandingBanner/LandingBanner';

const LandingPage = (props) => {
    
    return (
        <div className="LandingPage">
            <div className="LandingBanner-Panel">
                <LandingBanner />
            </div>
            <div className="LandingPage-ShopButton">
                    Discover the perfect pair 
                    <br />
                    <br />
                    
                <ShopButton />
            </div>
        </div>
    )
}

export default LandingPage;

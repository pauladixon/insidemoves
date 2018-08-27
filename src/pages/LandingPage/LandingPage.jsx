import React from 'react';
import './LandingPage.css';
import ShopButton from '../../components/ShopButton/ShopButton'
import LandingBanner from '../../components/LandingBanner/LandingBanner';

const LandingPage = (props) => {
    
    return (
        <div className="LandingPage">
            <div>
                <LandingBanner />
                <ShopButton />
            </div>
        </div>
    )
}

export default LandingPage;

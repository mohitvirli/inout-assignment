import React from 'react';

const HeroText = (props) => {


    return (
        <div className="hero-text-wrapper">
            <div className="hero-title">
                <div className="hero-hours">30</div>
                <div className="hero-subtext">Hours of ...</div>
            </div>
            <div className="hero-text">
                <div className="hero-lg">DESIGNING / BUILDING / CODING / HACkING</div>
                <div className="hero-md">Networking / friends / mentors / competitions</div>
                <div className="hero-sm">Coffee / tea / green tea / food / snacks / swags / t-shirts</div>
                <div className="hero-xs"><span className="text-adjust">And / a / whole / lot / more</span><span className="line"></span></div>
            </div>
            <div className="hero-bg">
                <div className="square-1"></div>
                <div className="square-2"></div>
                <div className="square-3"></div>
                <div className="square-4"></div>
                <div className="square-5"></div>
                <div className="circle-1"></div>
            </div>
        </div>
    )
};

export default HeroText;
import React from 'react';
import './Background.css'
import background from '../../images/bannerbackground.png'

const Background = () => {
    const bannerbackground = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundReapet: 'no-repeat',
        padding: '130px 0',
        backgroundPosition: 'center'
    }
    return (
        <div style={bannerbackground} className="background">
            <h2>Best Food Waiting For your Belly</h2>
             <div className="input-btn">
                 <input type="text" name="" id="" placeholder="search food items"/>
                 <button className="search-btn">Search</button>
             </div>
        </div>
    );
};

export default Background;
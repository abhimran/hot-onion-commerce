import React from 'react';
import './WhyChooseUs.css'

const ChooseUsCard = (props) => {
    const {title, img, description} = props.post;
    return (
      <div className="cardStyle">
        <img src={img} alt="" />
        <h4>{title}</h4>
        <p>{description}</p>
        <button>Learn More</button>
      </div>
    );
};

export default ChooseUsCard;
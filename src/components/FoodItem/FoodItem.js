import React from 'react';
import './FoodItem.css'

const FoodItem = (props) => {
    const {name, subDescription, price, photo} = props.item;
    return (
        <div className="foodItem">
            <img src={photo} alt=""/>
            <h4>{name}</h4>
            <p>{subDescription}</p>
            <h3>${price}</h3>
            <div className="foodItem__btn">
                <span>Add To Cart</span>
                <span>View Detail</span>
            </div>
        </div>
    );
};

export default FoodItem;
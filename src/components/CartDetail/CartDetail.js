import React from 'react';
import './CartDetail.css'

const CartDetail = (props) => {
    const {price, name, photo} = props.cart;
    console.log(props.cart.name);
    return (
        <div className="cart-details">
            <div className="img">
                <img src={photo} alt=""/>
            </div>
            <div className="name">
                <p>{name}</p>
                <h3>${price}</h3>
            </div>
            <div className="count">
                <button className="plus">+</button>
                <input type="number"/>
                <button className="minus">-</button>
            </div>
        </div>
    );
};

export default CartDetail;
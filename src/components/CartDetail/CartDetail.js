import React from 'react';
import './CartDetail.css'

const CartDetail = (props) => {
    const {price, name, photo, quantity, id} = props.cart;
    const {removeProduct} = props;

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
                <input type="number" defaultValue={quantity || ''} />
                <button className="minus">-</button>
            </div>
            <div className="removeItem">
                <button onClick={()=>removeProduct(id)}>X</button>
            </div>
        </div>
    );
};

export default CartDetail;
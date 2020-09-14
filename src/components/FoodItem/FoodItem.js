import React, { useContext } from 'react';
import { OnionContex } from '../../App';
import './FoodItem.css'


const FoodItem = (props) => {
    const {name, subDescription, price, photo} = props.item;
    const [cart, setCart, handleCart] = useContext(OnionContex)
    return (
        <div className="foodItem">
            <img src={photo} alt=""/>
            <h4>{name}</h4>
            <p>{subDescription}</p>
            <h3>${price}</h3>
            <div className="foodItem__btn">
                <span onClick={()=>handleCart(props.item)}>Add To Cart</span>
                <span>View Detail</span>
            </div>
        </div>
    );
};

export default FoodItem;
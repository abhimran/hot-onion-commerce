import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { OnionContex } from '../../App';
import foodData from '../../foodData';
import './FoodItemDetail.css'

const FoodItemDetail = () => {
    const [cart, setCart, handleCart] = useContext(OnionContex)
    const {id} = useParams();
    const findItem = foodData.find(pd=> pd.id == id);
    const {name, description, photo, price} = findItem;
    console.log(findItem);
    return (
        <div className="fooditem__detail">
            <div className="foodItem__container">
                <div className="foodItem__description">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <div className="foodItem__priceDetail">
                        <h2>${price}</h2>
                        <button className="plus">+</button>
                        <input type="number"/>
                        <button className="minus">-</button>
                    </div>
                    <button onClick={()=>handleCart(findItem)} className="FoodItem_cart">Add To Cart</button>
                </div>
                <div className="foodItem__img">
                    <img src={photo} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default FoodItemDetail;
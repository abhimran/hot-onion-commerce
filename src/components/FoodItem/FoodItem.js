import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OnionContex } from '../../App';
import './FoodItem.css'


const FoodItem = (props) => {
    const {name, subDescription, price, photo, id} = props.item;
    const [cart, setCart, handleCart] = useContext(OnionContex)
    // console.log(props.item);
    return (
        <div className="foodItem">
            <img src={photo} alt=""/>
            <h4>{name}</h4>
            <p>{subDescription}</p>
            <h3>${price}</h3>
            <div className="foodItem__btn">
                <span onClick={()=>handleCart(props.item)}>Add To Cart</span>
                <Link to={"/detail/"+id} style={{textDecoration: 'none'}}>
                    <span>View Detail</span>
                </Link>
            </div>
        </div>
    );
};

export default FoodItem;
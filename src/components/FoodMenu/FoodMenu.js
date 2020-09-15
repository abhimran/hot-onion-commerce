import React, { useState } from 'react';
import foodData from '../../foodData';
import FoodItem from '../FoodItem/FoodItem';
import './FoodMenu.css'

const FoodMenu = () => {
    const [foodMenu, setFoodMenu] = useState('lunch');
    const matchedCategory = foodData.filter(c => c.category === foodMenu);
    return (
        <div className="food-menu">
            <div className="foodMenu__container">
                <div className="foodMenu__items-header">
                    <span onClick={()=>setFoodMenu('breakfast')} className={(foodMenu === 'breakfast') ? 'active': ''}>Breakfast</span>
                    <span onClick={()=>setFoodMenu('lunch')} className={(foodMenu === 'lunch') ? 'active': ''}>Lunch</span>
                    <span onClick={()=>setFoodMenu('dinner')} className={(foodMenu === 'dinner') ? 'active': ''}>Dinner</span>
                </div>
                <div className="foodMenu__menu-items">
                    {
                        matchedCategory.map(item => <FoodItem item={item} key={item.id}></FoodItem>)
                    }
                </div>
            </div>
            <div className="checkOut-btn">
              <button>Check Out Your Food</button>
            </div>
        </div>
    );
};

export default FoodMenu;
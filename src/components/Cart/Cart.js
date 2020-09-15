import React, { useContext, useEffect, useState } from 'react';
import { OnionContex } from '../../App';
import foodData from '../../foodData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import CartDetail from '../CartDetail/CartDetail';
import './Cart.css'

const Cart = () => {
    const [cart, setCart, handleCart, removeProduct, addBtn] = useContext(OnionContex);

    // const [product, setProduct] = useState([]);
     useEffect(() => {
         const saveCart = getDatabaseCart();
         const productKeys = Object.keys(saveCart);
         const cartProducts = productKeys.map(key => {
             const product = foodData.find(pd => pd.id == key);
             product.quantity = saveCart[key];
             return product;
         })
        //  setProduct(cartProducts);
         setCart(cartProducts);
     }, [])
    
    // const subtotal = product.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    const subtotal = cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    const tax= (subtotal/12).toFixed(2);
    const total = (Number(tax) + Number(subtotal)).toFixed(2);
    return (
        <div className="cart">
            <div className="cart__container">
                <div className="cart__deleviry-detail">
                <h1>Hello this is detail form</h1>
            </div>

            <div className="cart-detail">
                <div className="delivery-info">
                    < p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis, iusto.consectetur adipisicing elit.Perferendis, iusto.</p>
                </div>
                <div className="order-info">
                    {
                     cart.map((item, index)=> <CartDetail cart={item} key={index} removeProduct={removeProduct} addBtn={addBtn}></CartDetail>)
                    }
                </div>
                <div className="total-info">
                    <p>Subtotal - {cart.length} items: ${subtotal} </p>
                    <p>Tax: ${tax}</p>
                    <p>Total: ${total}</p>
                    <button>Place Order</button>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Cart;
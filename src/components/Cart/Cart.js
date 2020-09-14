import React, { useContext } from 'react';
import { OnionContex } from '../../App';
import CartDetail from '../CartDetail/CartDetail';
import './Cart.css'

const Cart = () => {
    const [cart, setCart, handleCart] = useContext(OnionContex)
    
    const subtotal = cart.reduce((total, product)=> total + product.price,0)
    const tax= (subtotal/12).toFixed(2);
    const total = Number(tax) + subtotal;
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
                     cart.map(item=> <CartDetail cart={item} key={item.id}></CartDetail>)
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
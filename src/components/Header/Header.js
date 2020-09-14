import React, { useContext } from 'react';
import logo from '../../images/logo2.png'
import cartIcon from '../../images/ICON/cart.png'
import './Header.css'
import { OnionContex } from '../../App';
import { Link } from 'react-router-dom';


const Header = () => {
     const [cart, setCart, handleCart] = useContext(OnionContex)
    return (
        <div className="header">
            <div className="header__container">
                <div className="logo">
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <img src={logo} alt=""/>
                    </Link>
                </div>
                <div className="menu">
                    <li>
                        <Link to="/cart" style={{textDecoration: 'none'}}>
                            <img src={cartIcon} alt=""/>
                            <span>{cart.length}</span>
                        </Link>
                    </li>
                    <li>login</li>
                    <li className="sign-up">Sign up</li>
                </div>
            </div>
        </div>
    );
};

export default Header;
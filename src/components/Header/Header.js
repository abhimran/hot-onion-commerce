import React from 'react';
import logo from '../../images/logo2.png'
import cartIcon from '../../images/ICON/cart.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="logo">
                <img src={logo} alt=""/>
                </div>
                <div className="menu">
                    <li>
                        <img src={cartIcon} alt=""/>
                        <span>0</span>
                    </li>
                    <li>login</li>
                    <li className="sign-up">Sign up</li>
                </div>
            </div>
        </div>
    );
};

export default Header;
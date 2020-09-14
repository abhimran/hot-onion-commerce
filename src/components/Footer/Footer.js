import React from 'react';
import footerLogo from '../../images/logo.png';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__sub">
                <div className="logo">
                    <img src={footerLogo} alt=""/>
                </div>
                <div className="list">
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </div>

                <div className="list2">
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </div>
            </div>
            <div className="footer__main">
                <h3>Copyright &copy; Abdullah Imran</h3>
            </div>
        </div>
    );
};

export default Footer;
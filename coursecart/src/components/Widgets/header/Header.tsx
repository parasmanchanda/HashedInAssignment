import React from 'react'
import { Link, Router } from 'react-router-dom';
import './headerStyle.css';

function Header(){
    return (
        <div>
       
            <header>
                <a href="#showcase"><img className="branding-icon" src="./images/Logo-2.png" alt="branding" /></a>
                <div className="nav">
                    <ul>
                        <li><button className="heading-course"><Link to="/courses"><span>COURSES</span> </Link></button></li>
                        <li><button className="heading-wishlist"><Link to="/wishlist"><span >MY WISHLIST</span></Link></button></li>
                        <li><button className="cart-icon" ><Link to="/cart"><img  src="./images/Shopping-Cart.svg" alt="cart-icon" /></Link></button></li>
                        <li><button className="profile-icon" ><Link to="/profile"><img  src="./images/noun_profile_2068277.svg" alt="profile-icon" /></Link></button></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;


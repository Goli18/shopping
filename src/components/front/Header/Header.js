import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import OrderBy from '../orderBy/orderBy';





const Header = ({cartItems}) => {
    return (
        <header className="header">
            <div>
                <h1>
                   <Link to = "/" className= "logo">
                       Welcome To Shop
                   </Link>
                </h1>
            </div>
            <div>
                <div className= "header-links">
                    <ul>
                        <li>
                            <Link to="/"> Home</Link>
                        </li>
                        </ul>
                        <ul>
                            <li>
                                ___
                                </li>
                                </ul>

                       <ul>
                            <li>
                           < OrderBy/>     
                           </li>
                                </ul>
                                <ul>
                            <li>
                                ____
                                </li>
                                </ul>


                        <ul>
                        <li>
                            <Link to="/cart" className= "cart"> 
                             <ShoppingCartIcon/>
                            <span className= "cart-length">
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </span>
                            </Link>
                        </li>
                        </ul>
                        </div>
            </div>
        </header>
    )
}

export default Header;

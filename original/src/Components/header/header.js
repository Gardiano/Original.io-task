
import React from 'react';
import './header.css';

import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import bag from '../../assets/bag.png';

export default function Header(){
    return (
        <header>
            <button className="menu"> 
                <img src={menu} alt="menu" /> 
            </button>
                <img className="logo" src={logo} alt="logo" /> 
            <button className="search">
                <img src={search} alt="menu" /> 
            </button>
            <button className="bag">
                <img src={bag} alt="bag" /> 
            </button>
        </header>
    );
}

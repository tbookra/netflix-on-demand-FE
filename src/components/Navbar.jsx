import React from 'react';
import {  NavLink } from "react-router-dom";


const Navbar =() =>{
    return (
        <div className="ui secondary pointing menu">
            <nav>
            <NavLink activeClassName="active" className="navs" to="/">
                HOME
            </NavLink>
            <NavLink activeClassName="active" className="navs" to="/Item">
                Item
            </NavLink>
            <NavLink activeClassName="active" className="navs" to="/Login">
                Login
            </NavLink>

        </nav>
           
         
        </div>
    )
};

export default Navbar;
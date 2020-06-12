import React from "react";
import NavItem from "./navItem";
import fullLogo from "../../../assets/full-logo.png";


const NavItems = (props) => {
    return (
        <div className={`flex ${props.col?"flex-col":"items-center"} `}>
            <NavItem link="/" col={props.col}><center><img src={fullLogo} alt="Home" className="w-24"/></center></NavItem>
            <NavItem link="/#contact" col={props.col}>contact</NavItem>
            <NavItem link="/#about" col={props.col}>about</NavItem>
            <NavItem link="/#services" col={props.col}>Services</NavItem>
        </div>
    );
}

export default NavItems;
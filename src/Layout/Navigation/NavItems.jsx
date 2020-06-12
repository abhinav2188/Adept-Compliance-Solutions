import React, { useEffect } from "react";
import NavItem from "./NavItem";
import {useLocation} from "react-router-dom";

const AnchorLink = props => (
    <a href={props.link} className={`px-2 capitalize hover:text-orange-mid ${props.col?"py-2":""} ${props.active?"text-orange-mid":""}`}><p>{props.children}</p></a>
)

const NavItems = (props) => {
    const location = useLocation();
    useEffect(()=>{
        console.log(location);
    },[location])
    return (
        <div className={`flex ${props.col?"flex-col":"items-center"} `}>
            <NavItem link="/" col={props.col}>Home</NavItem>
            <NavItem link="/contact" col={props.col}>contact</NavItem>
            <NavItem link="/about" col={props.col}>about</NavItem>
            <AnchorLink link="/#services" col={props.col} active={location.pathname==="/service"}>Services</AnchorLink>
        </div>
    );
}

export default NavItems;
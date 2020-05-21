import React from "react";
import NavItem from "./NavItem";

const NavItems = (props) => {
    return (
        <div className={`flex ${props.col?"flex-col":"items-center"} `}>
            {
                props.navlinks.map((navlink,index) => (
                    <NavItem key={index} link={navlink.link} col={props.col}>{navlink.name}</NavItem>
                ))
            }
        </div>
    );
}

export default NavItems;
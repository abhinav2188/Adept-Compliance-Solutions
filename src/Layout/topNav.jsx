import React from "react";
import NavItems from "./Navigation/NavItems";
import phoneSvg from "../assets/svgs/phone";
import mailSvg from "../assets/svgs/mail";
import Notifications from "./Navigation/notification";
import menuSvg from "../assets/svgs/menu.svg";
import Popper from "../components/UI/popper";
import staticContent from "../assets/staticContent";

const phone = <div className="md:h-5 h-4 text-white hover:text-orange-mid">{phoneSvg}</div>
const mail =  <div className="md:h-5 h-4 text-white hover:text-orange-mid">{mailSvg}</div>

const TopNav = (props) => {

    return (
        <div className="w-full bg-gray-light py-4">
            <div className="w-11/12 mx-auto flex justify-between items-center">
                <button className="md:hidden" onClick={()=>props.setShowSidebar(prevState => !prevState)}>
                    <img className="md:h-5 h-4" src={menuSvg} alt="menu"/>
                </button>
                <div className="md:flex hidden">
                    <NavItems navlinks={props.mainLinks}/>
                </div>
                <div className="flex items-center">
                    <Notifications notifications={["n1","n2","n3"]}></Notifications>
                    <Popper name={phone}>
                        <h6>{staticContent.companyData.phone}</h6>
                    </Popper>
                    <Popper name={mail} >
                        <h6>{staticContent.companyData.email}</h6>
                    </Popper>
                </div>
            </div>
        </div>
        
    );
}

export default TopNav;
import React,{useState} from "react";
import TopNav from "./topNav";
import BottomNav from "./bottomNav";
import Footer from "./footer";
import SideDrawer from "./Navigation/sideDrawer";
import NavItems from "./Navigation/NavItems";
import Dropdown from "./Navigation/Dropdown";

const mainNavlinks = [
    {
        link:"/",
        name:"Home"
    },
    {
        link:"/about",
        name:"About"
    },
    {
        link:"/downloads",
        name:"Downloads"
    },
    {
        link:"/clients",
        name:"clients"
    },
    {
        link:"/updates",
        name:"updates"
    },

];
const serviceLinks = [
    {
        link:"/services/service1",
        name:"service1"
    },
    {
        link:"/services/service2",
        name:"service3"
    },
    {
        link:"/services/service3",
        name:"service3"
    },
    {
        link:"/services/service4",
        name:"service4"
    },
    {
        link:"/services/service5",
        name:"service5 BSI Registration"
    },
];

const sideDrawerContent = 
<div className="flex-col">
    <NavItems navlinks={mainNavlinks} col/>
    <Dropdown name="Services" inline>
        <NavItems navlinks={serviceLinks} col/>
    </Dropdown>
</div>

const Layout = (props) => {
    const [showSidebar,setShowSidebar] = useState(false);
    return (
        <div className="flex flex-col font-paras antialiased text-white bg-gray-dark min-h-screen w-full">
            <TopNav setShowSidebar={setShowSidebar} mainLinks={mainNavlinks} serviceLinks={serviceLinks}/>
            <SideDrawer show={showSidebar} mainLinks={mainNavlinks} serviceLinks={serviceLinks} close={()=>setShowSidebar(false)}>
                {sideDrawerContent}
            </SideDrawer>
            <div className="flex-grow ">
                {props.children}
            </div>
            {/* <BottomNav /> */}
            <Footer />
        </div>
    );
}

export default Layout;
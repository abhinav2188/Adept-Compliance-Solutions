import React from "react";
import TopNav from "./topNav";
import BottomNav from "./bottomNav";
import Footer from "./footer";

const Layout = (props) => {
    return (
        <div className="flex flex-col font-paras antialiased text-white bg-gray-dark min-h-screen w-full">
            <TopNav />
            <div className="flex-grow ">
                {props.children}
            </div>
            {/* <BottomNav /> */}
            <Footer />
        </div>
    );
}

export default Layout;
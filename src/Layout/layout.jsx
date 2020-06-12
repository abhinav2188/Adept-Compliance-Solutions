import React, { useState } from "react";
import TopNav from "./topNav";
import BottomNav from "./bottomNav";
import Footer from "./footer";
import Slider from "../components/UI/slider";
import NavItems from "./Navigation/NavItems";

const Layout = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex flex-col font-paras antialiased text-white bg-gray-dark w-full">
      <div className="flex flex-col w-full min-h-screen">
        <TopNav setShowSidebar={setShowSidebar} />
        <Slider show={showSidebar} close={() => setShowSidebar(false)}>
          <NavItems col/>
        </Slider>
        <div className={`${showSidebar?"h-full overflow-hidden":"flex-grow"}`}>{props.children}</div>
      </div>
      <BottomNav />
      <Footer />
    </div>
  );
};

export default Layout;

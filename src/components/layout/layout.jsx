import React, { useState, useContext } from "react";
import TopNav from "./topNav";
import BottomNav from "./bottomNav";
import Footer from "./footer";
import Slider from "../UI/slider";
import NavItems from "./navigation/navItems";
import ModalContext from "../../context/modalContext";
import Modal from "../UI/modal";

const Layout = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const modalContext = useContext(ModalContext);
  return (
    <div className={`flex flex-col font-paras antialiased text-white bg-gray-dark w-full ${showSidebar?"h-screen overflow-y-hidden":""}` }>
      <div className="flex flex-col w-full min-h-screen">
        <TopNav setShowSidebar={setShowSidebar} />
        <Slider show={showSidebar} close={() => setShowSidebar(false)}>
          <NavItems col/>
        </Slider>
        <Modal show={modalContext.showModal} close={modalContext.closeModal}>
          {modalContext.content}
        </Modal>
        <div className="flex-grow">{props.children}</div>
      </div>
      <BottomNav />
      <Footer />
    </div>
  );
};

export default Layout;

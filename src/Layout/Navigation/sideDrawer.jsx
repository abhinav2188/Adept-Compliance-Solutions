import React from 'react';
import BackDrop from '../../components/UI/backdrop';

const SideDrawer = (props) => {
    return (
    <>
        <BackDrop show={props.show} close={props.close} /> 
        <div className={`md:hidden h-screen fixed min-w-32 top-0 z-40 bg-gray-dark py-4 px-2 flex flex-col transition-all duration-500 ease-out
            ${!props.show&&'transform -translate-x-full'}`}>
            {props.children}
        </div>
    </>
    );
}

export default SideDrawer;
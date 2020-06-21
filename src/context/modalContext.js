import React from 'react';

const modalContext = React.createContext({
    showModal : false,
    openModal : () => {},
    closeModal : () => {},
    content:"",
    setContent: () => {}
});

export default modalContext;

import React from 'react';

const authContext = React.createContext({
    token : "",
    setToken: () => {},
    dataChanged:false,
    setDataChanged:()=>{}
});

export default authContext;

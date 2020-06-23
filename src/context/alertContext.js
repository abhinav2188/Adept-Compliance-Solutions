import React from "react";

const alertContext = React.createContext({
    messages : [],
    addMessage: () => {},
    removeMessage : () => {},
})

export default alertContext;
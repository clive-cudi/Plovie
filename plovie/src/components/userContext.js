import React from "react";
import { useState } from "react";
// import { createContext } from "react";

export const userContext = React.createContext();

export const UserProvider = ({children}) =>{
    const [globalUsername, setGlobalUsername ] = useState('');

    return (
        <userContext.Provider value={[globalUsername, setGlobalUsername]}>
            {children}
        </userContext.Provider>
    )
}
import React from "react";
import { useState } from "react";

export const UsernameCtx = React.createContext();

export const UserNameCtxProvider = ({children}) => {
    const [userName, setUserNameCtx] = useState('');

    return (
        <UsernameCtx.Provider value={[userName, setUserNameCtx]} >
            {children}
        </UsernameCtx.Provider>
    )
}
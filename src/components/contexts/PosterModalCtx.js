import React from 'react';
import { useState } from 'react';

export const PosterModalCtx = React.createContext();

export function PosterModalCtxProvider({children}){
    const [showPosterModal, setPosterModal] = useState({
        status: false,
        image: ""
    });

    return (
        <PosterModalCtx.Provider value={[showPosterModal, setPosterModal]} >
            {children}
        </PosterModalCtx.Provider>
    )
}
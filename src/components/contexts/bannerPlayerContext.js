import React from "react";
import { useState } from "react";

export const PlayerContext = React.createContext();

export const PlayerContextProvider = ({children}) => {
    const [PlayerTrailerUrl, setPlayerTrailerUrl] = useState();

    return (
        <PlayerContext.Provider value={[PlayerTrailerUrl, setPlayerTrailerUrl]}>
            {children}
        </PlayerContext.Provider>
    )
}
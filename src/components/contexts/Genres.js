import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const GenresCtx = React.createContext();

export const GenresCtxProvider = ({children}) => {
    const [genreList, setGenreList] = useState();

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=6ac957d235f1d336d00267932cab5b5c&language=en-US').then((res)=>{
            setGenreList(res.data.genres);
            console.log(genreList)
        }).catch((e)=>{
            console.log(e)
        })
    },[])

    return (
        <GenresCtx.Provider value={[genreList, setGenreList]} >
            {children}
        </GenresCtx.Provider>
    )
}
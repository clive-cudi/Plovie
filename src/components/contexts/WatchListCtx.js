import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import { setDoc } from "@firebase/firestore";
import { doc } from "@firebase/firestore";
import { UsernameCtx } from "./UserNameCtx";
import { useContext } from "react"

export const WatchlistCtx = React.createContext();
export const displayWatchListCtx = React.createContext();

export const WatchlistCtxProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  const [userName] = useContext(UsernameCtx);
  let initialWatchlist = [];

  useEffect(() => {
    if (userName) {
      setDoc(doc(db, "watchLists", userName), { watchList })
        .then(() => {
          console.log("successful storage to firebase");
          // localStorage.setItem(userName, JSON.stringify(watchList));
          console.log(watchList);
        })
        .catch((e) => {
          console.log(e);
        });
      console.log(userName);
    }
  }, [watchList]);

  useEffect(()=>{
      if(userName){
          console.log("username Present", userName);
          let storedData = localStorage.getItem(userName);
          if (storedData){
            console.log("StoredData present", storedData);
            let storedMovies = JSON.parse(storedData);
            console.log("stored movies",storedMovies);
            initialWatchlist.push(storedMovies)
            console.log("initial watchlist",initialWatchlist);
            if (initialWatchlist.length !== 0){
                setWatchList((prev)=>{
                    return (
                    [...prev, initialWatchlist[0]]
                    )
                });
            }
          }
      }
  },[])

  return (
    <WatchlistCtx.Provider value={[watchList, setWatchList]}>
      {children}
    </WatchlistCtx.Provider>
  );
};

export const DisplayWatchListCtxProvider = ({children}) => {
  const [showWatchlist, setShowWatchlist] = useState(true);

  return (
    <displayWatchListCtx.Provider value={[showWatchlist, setShowWatchlist]} >
      {children}
    </displayWatchListCtx.Provider>
  )
}
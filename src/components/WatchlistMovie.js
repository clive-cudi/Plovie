import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { PosterModalCtx } from "./contexts/PosterModalCtx";
import { WatchlistCtx } from "./contexts/WatchListCtx";

function WatchlistMovie({ name, image, number, genre, removeHandler }) {
  const [minSettings, setMinSettings] = useState(false);
  const [showPosterModal, setPosterModal] = useContext(PosterModalCtx);
  const [watchlist, setWatchList] = useContext(WatchlistCtx);

  function togglePosterModal(){
    if (showPosterModal == true){
      setPosterModal({
        status: false,
        image: ""
      })
    } else {
      setPosterModal({
        status: true,
        image: image
      })
      console.log(showPosterModal.image)
    }
  }
  useEffect(() => {
    if (window.innerWidth < 800) {
      setMinSettings(true);
    } else {
      setMinSettings(false);
    }
  }, []);

  return (
    <div className="wl-movie-wrapper">
      <div className="wl-number-wrapper">
        <h5>{number}</h5>
      </div>
      <div className="wl-image-wrapper">
        <img src={image} alt="@" onClick={()=>{
          togglePosterModal()
        }} />
        <span title="View Poster"></span>
      </div>
      <div className="wl-title-wrapper">
        <h3>{name == "undefined" ? "Netflix Original" : `${name}`}</h3>
        <h4 style={{
          display: minSettings == true ? "none" : "flex"
        }}>Genre: {genre}</h4>
      </div>
      <div className="wl-controls-wrapper">
        <button
          style={{
            display: minSettings ? "flex" : "none",
          }}
        >
          <i className="fa fa-cog"></i>
        </button>
        <button
          style={{
            display: minSettings == true ? "none" : "flex",
          }}
        >Movie Description</button>
        <button
          style={{
            display: minSettings == true ? "none" : "flex",
          }}
        >Play Trailer</button>
        <button
          style={{
            display: minSettings == true ? "none" : "flex",
          }}
          onClick={removeHandler}
        >Remove from Watchlist</button>
      </div>
    </div>
  );
}

export default WatchlistMovie;
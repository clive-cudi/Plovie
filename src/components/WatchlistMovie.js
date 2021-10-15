import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function WatchlistMovie({ name, image, number, genre }) {
  const [minSettings, setMinSettings] = useState(false);
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
        <img src={image} alt="@" />
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
        >Remove from Watchlist</button>
      </div>
    </div>
  );
}

export default WatchlistMovie;

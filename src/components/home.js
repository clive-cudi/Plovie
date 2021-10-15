import React from "react";
import Row from "./Row";
import requests from "./requests";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import { PlayerContext } from "./contexts/bannerPlayerContext";
import { useContext } from "react";
import BannerPlayer from "./BannerPlayer";
import { displayWatchListCtx } from "./contexts/WatchListCtx";
import HomeContent from "./HomeContent";
import WatchList from "./WatchList";

function Home() {
  const [handleShow, setShow] = useState(false);
  const [playerTrailerUrl, setPlayerTrailerUrl] = useContext(PlayerContext);
  const [showWatchlist] = useContext(displayWatchListCtx);
  //scroll listener
  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        setShow(true);
        // console.log("scrolled");
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <div className="home-main-wrapper">
      <div className={`navbar-wrapper ${handleShow && "navred"}`}>
        <Navbar />
      </div>
      {
        showWatchlist ? <WatchList /> : <HomeContent />
      }
    </div>
  );
}

export default Home;

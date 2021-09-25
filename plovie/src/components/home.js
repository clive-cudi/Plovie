import React from "react";
import Row from "./Row";
import requests from "./requests";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import { PlayerContext } from "./contexts/bannerPlayerContext";
import { useContext } from "react";
import BannerPlayer from "./BannerPlayer";

function Home() {
  const [handleShow, setShow] = useState(false);
  const [playerTrailerUrl, setPlayerTrailerUrl] = useContext(PlayerContext);
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
      <div className="banner-main-wrapper">
        <Banner fetchBannerData={requests.fetchPopularMovies} />
        {
          playerTrailerUrl && <BannerPlayer trailerUrl={playerTrailerUrl} opts={opts} />
        }
      </div>
      <div className="movie-rows-main-wrapper">
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      </div>
    </div>
  );
}

export default Home;

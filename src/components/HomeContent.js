import React from "react";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./requests";
import { useEffect, useState } from "react";
import { PlayerContext } from "./contexts/bannerPlayerContext";
import { useContext } from "react";
import BannerPlayer from "./BannerPlayer";

function HomeContent() {
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
    <div>
      <div className="banner-main-wrapper">
        <Banner fetchBannerData={requests.fetchPopularMovies} />
        {playerTrailerUrl && (
          <BannerPlayer trailerUrl={playerTrailerUrl} opts={opts} />
        )}
      </div>
      <div className="movie-rows-main-wrapper">
        <Row
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          idHeader="tn"
        />
        <Row
          title="Top Rated"
          fetchUrl={requests.fetchTopRated}
          idHeader="tr"
        />
        <Row
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
          idHeader="am"
        />
        <Row
          title="Romance"
          fetchUrl={requests.fetchRomanceMovies}
          idHeader="r"
        />
        <Row
          title="Horror"
          fetchUrl={requests.fetchHorrorMovies}
          idHeader="h"
        />
        <Row
          title="Comedy"
          fetchUrl={requests.fetchComedyMovies}
          idHeader="c"
        />
        <Row
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
          idHeader="d"
        />
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          idHeader="no"
        />
      </div>
    </div>
  );
}

export default HomeContent;

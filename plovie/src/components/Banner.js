import React from "react";
import BottomFader from "./bottomFader";
import { useEffect, useState } from "react";
import axios from "./axios";
import movieTrailer from "movie-trailer";
import { PlayerContext } from "./contexts/bannerPlayerContext";
import { useContext } from "react";

const image_base_url = "https://image.tmdb.org/t/p/original";

function Banner({fetchBannerData, image}) {
    let [popular, setPopular] = useState([]);
    const [trailerUrl, setTrailerUrl ] = useState("");
    const [playerTrailerUrl, setPlayerTrailerUrl] = useContext(PlayerContext);

    useEffect(()=>{
        async function fetchPopular(){
            const request = await axios.get(fetchBannerData);
            const arrayMovies = request.data.results;
            // console.log(arrayMovies)
            let randomMovie = arrayMovies[Math.floor(Math.random() * arrayMovies.length)];
            // console.log(randomMovie);
            setPopular(randomMovie);
            return request;
        }
        fetchPopular();
    },[fetchBannerData])

    function handlePlay(movie){
      if (trailerUrl) {
        setTrailerUrl('');
        setPlayerTrailerUrl('');
      } else {
        movieTrailer(movie?.name || "", {tmdbId: movie.id}).then((url)=>{
          console.log(`Banner Trailer Url:\n${url}`);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
          console.log(urlParams.get('v'))
          setPlayerTrailerUrl(urlParams.get('v'));
          // console.log(`TrailerUrl:\n${trailerUrl}`)
        }).catch((e)=>{
          console.log(e)
        })
      }
    }

  return (
    <div className="banner-main-cont" style={{
        backgroundImage: `url(
            "${image_base_url}${popular.backdrop_path}"
        )`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    }}>
      <div className="banner-title-wrapper">
        <div className="movie-title-wrapper">
          <h1>{popular.original_title}</h1>
        </div>
        <div className="movie-controls-wrapper">
          <button onClick={()=>{
            handlePlay(popular);
          }}>{trailerUrl ? "Stop Trailer" : "Play Trailer"}</button>
          <button>Add to Watchlist</button>
        </div>
        <div className="movie-about">
          <h5>
              {popular.overview}
          </h5>
        </div>
      </div>
      <BottomFader />
    </div>
  );
}

export default Banner;

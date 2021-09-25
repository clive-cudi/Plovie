import React from "react";
import axios from "./axios";
import { useState } from "react";
import { useEffect } from "react";
import Poster from "./Poster";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';
// import Err404 from "./404";

const image_base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl ] = useState("");
  const [currentMovie, setCurrent] = useState("");
  const [movieId, setMovieId] = useState("");

  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function handleClick(movie) {
    if (trailerUrl){
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || "", {tmdbId: movie.id }).then((url)=>{
        console.log(url)
          const urlParams = new URLSearchParams(new URL(url).search);
        console.log(urlParams)
        setMovieId(movie.id)
        console.log(movieId)
        setTrailerUrl(urlParams.get('v'))
        console.log(`TrailerUrl:\n${trailerUrl}`)
        setCurrent(movie?.name)
        console.log(currentMovie)
      }).catch ((e)=>{console.log(e)})
    }
  }
  // function check(){
  //   return trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> ? true : false
  // }

  return (
    <div className="row-main-wrapper">
      <div className="row-title-wrapper">
        <h1>{title}</h1>
      </div>
      <div className="posters-wrapper">
        {movies.map((movie) => {
          let url = `${image_base_url}${movie.poster_path}`;
          return <Poster imgUrl={url} key={movie.id} clickHandler={()=>{handleClick(movie)}} movieTitle={movie.title} />;
        })}
      </div>
      {
          trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
      }
    </div>
  );
}

export default Row;
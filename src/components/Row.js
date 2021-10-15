import React from "react";
import axios from "./axios";
import { useState } from "react";
import { useEffect } from "react";
import Poster from "./Poster";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useContext } from "react";
import { UsernameCtx } from "./contexts/UserNameCtx";
import { WatchlistCtx } from "./contexts/WatchListCtx";
import { GenresCtx } from "./contexts/Genres";
// import Err404 from "./404";

const image_base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, idHeader }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [currentMovie, setCurrent] = useState("");
  const [movieId, setMovieId] = useState("");
  const [userName] = useContext(UsernameCtx);
  const [watchlist, setWatchList] = useContext(WatchlistCtx);
  const [genreList] = useContext(GenresCtx);
  const [currentGenres, setCurrentGenres] = useState('');

  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

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
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "", { tmdbId: movie.id })
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          setMovieId(movie.id);
          console.log(movieId);
          setTrailerUrl(urlParams.get("v"));
          console.log(`TrailerUrl:\n${trailerUrl}`);
          setCurrent(movie?.name);
          console.log(currentMovie);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
  function findGenres(titles, movie_genres) {
    let list = genreList;
    let genresFound = [];
    movie_genres.map((movie) => {
      list.find((genre) => {
        if (genre.id == movie) {
          genresFound.push(genre.name);
        }
      });
    });
    setCurrentGenres(genresFound.toString());
  }
  function addToWatchlist(movie) {
    const movieName = `${movie?.original_title}`;
    let ImgURl = `${image_base_url}${movie.poster_path}`;
    findGenres(movie?.original_title, movie.genre_ids);
    setWatchList((prevMovies) => {
      return [
        ...prevMovies,
        {
          name: movieName,
          id: movie.id,
          image: ImgURl,
          genre: currentGenres,
        },
      ];
    });
    console.log(watchlist);
    // setDoc(doc(db, "watchLists", userName),{
    //   movies : watchlist
    // }).then(()=>{
    //   console.log("set successful")
    // }).catch((e)=>{
    //   console.log(e)
    // })
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
          let random = `${idHeader}${(Math.random() * 2).toFixed(5)}`;
          let url = `${image_base_url}${movie.poster_path}`;
          return (
            <Poster
              id={random}
              imgUrl={url}
              key={movie.id}
              clickHandler={() => {
                handleClick(movie);
              }}
              movieTitle={movie.title}
              addHandler={() => {
                addToWatchlist(movie);
              }}
              checked={false}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

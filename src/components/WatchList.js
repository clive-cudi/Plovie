import React from "react";
import { useContext } from "react";
import { WatchlistCtx } from "./contexts/WatchListCtx";
import "./watchlist.css";
import WatchlistMovie from "./WatchlistMovie";
import PosterModal from "./PosterModal";
import { PosterModalCtx } from "./contexts/PosterModalCtx";
import Err404 from "./404";
import Modal from "./Modal";

function WatchList() {
  const [watchlist, setWatchList] = useContext(WatchlistCtx);
  const [showPosterModal] = useContext(PosterModalCtx);

  function removeFromWatchlist(movie) {
    const movieId = movie.id;
    let watchlistDuplicate = [...watchlist];
    let filteredArray = watchlistDuplicate.filter((mov) => {
      return mov.id !== movieId;
    });
    console.log(filteredArray);
    setWatchList(filteredArray);
    console.log(watchlist);
  }

  return (
    <div className="watchlist-main-wrapper">
      <div className="watchlist-cont">
        <div className="watchlist-title-wrapper">
          <h2>My Watchlist</h2>
        </div>
        <div className="watchlist-movies-wrapper">
          {watchlist.length > 0 ? (
            watchlist.map((movie, currentIndex) => {
              return (
                <WatchlistMovie
                  key={currentIndex}
                  name={movie.name}
                  image={movie.image}
                  genre={movie.genre}
                  removeHandler={() => {
                    removeFromWatchlist(movie);
                  }}
                />
              );
            })
          ) : (
            <Err404 message="Please Add a movie to the watchlist to view it here" />
          )}
        </div>
      </div>
      {showPosterModal.status == true && (
        <PosterModal image={showPosterModal.image} />
      )}
    </div>
  );
}

export default WatchList;

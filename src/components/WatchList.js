import React from "react";
import { useContext } from "react";
import { WatchlistCtx } from "./contexts/WatchListCtx";
import "./watchlist.css";
import WatchlistMovie from "./WatchlistMovie";
import PosterModal from "./PosterModal";
import { PosterModalCtx } from "./contexts/PosterModalCtx";
import Err404 from "./404";

function WatchList() {
  const [watchlist, setWatchList] = useContext(WatchlistCtx);
  const [showPosterModal] = useContext(PosterModalCtx);
  return (
    <div className="watchlist-main-wrapper">
      <div className="watchlist-cont">
        <div className="watchlist-title-wrapper">
          <h2>My Watchlist</h2>
        </div>
        <div className="watchlist-movies-wrapper">
          {watchlist.length > 0 ? (
            watchlist.map((movie) => {
              return (
                <WatchlistMovie
                  name={movie.name}
                  image={movie.image}
                  genre={movie.genre}
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

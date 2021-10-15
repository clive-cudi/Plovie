import React from 'react';
import { useContext } from 'react';
import { WatchlistCtx } from './contexts/WatchListCtx';
import './watchlist.css';
import WatchlistMovie from './WatchlistMovie';

function WatchList() {
    const [watchlist, setWatchList] = useContext(WatchlistCtx)
    return (
        <div className="watchlist-main-wrapper">
            <div className="watchlist-cont">
                <div className="watchlist-title-wrapper">
                    <h2>My Watchlist</h2>
                </div>
                <div className="watchlist-movies-wrapper">
                    {
                        watchlist.map((movie)=>{
                            return(
                            <WatchlistMovie name={movie.name} image={movie.image} genre={movie.genre} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WatchList

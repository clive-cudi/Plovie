import React from 'react';
import { useContext } from 'react';
import { displayWatchListCtx } from './contexts/WatchListCtx';

function WatchlistBtn() {
    const [showWatchlist, setShowWatchlist] = useContext(displayWatchListCtx);

    function toggleWatchlist() {
        if (showWatchlist == true){
            setShowWatchlist(false)
        } else {
            setShowWatchlist(true)
        }
    }

    return (
        <div className="nav-controls">
            <button onClick={toggleWatchlist}>{showWatchlist ? "Home" : "My Watchlist"}</button>
        </div>
    )
}

export default WatchlistBtn;
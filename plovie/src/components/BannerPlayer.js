import React from "react";
import YouTube from "react-youtube";

function BannerPlayer ({trailerUrl, opts}) {
    return (
        <div className="banner-player-wrapper">
            <div className="banner-player">
                <YouTube videoId={trailerUrl} opts={opts} />
            </div>
        </div>
    )
}

export default BannerPlayer;
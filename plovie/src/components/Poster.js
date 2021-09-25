import React from 'react';

function Poster({imgUrl, clickHandler, movieTitle}){
    return (
        <div className="image-cont">
            <img src={imgUrl} alt="Loading" className="poster-image" onClick={clickHandler} />
            <span className="tooltiptext">{movieTitle}</span>
        </div>
    )
}

export default Poster;
import React from 'react';

function Poster({imgUrl, clickHandler, movieTitle, addHandler, checked, id}){
    return (
        <div className="image-cont" id={id}>
            <img src={imgUrl} alt="Loading" className="poster-image" onClick={clickHandler} />
            <span className="tooltiptext">{movieTitle}</span>
            <button className="add-list" onClick={addHandler} disabled={checked ? true : false}><span title={checked ? "Added to Watchlist" : "Add to Watchlist"}><i className={checked ? "fa fa-check": "fa fa-plus"} style={{
                color: checked ? "chartreuse" : "tomato"
            }}></i></span></button>
        </div>
    )
}

export default Poster;
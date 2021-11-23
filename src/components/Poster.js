import React from 'react';
import { useState } from 'react';

function Poster({imgUrl, clickHandler, movieTitle, addHandler, checked, id}){
    const [checkedStatus, setCheckedStatus] = useState(checked);
    return (
        <div className="image-cont" id={id}>
            <img src={imgUrl} alt="Loading" className="poster-image" onClick={clickHandler} />
            <span className="tooltiptext">{movieTitle}</span>
            <button className="add-list" onClick={()=>{
                addHandler();
                setCheckedStatus(true)
            }} disabled={checkedStatus ? true : false}><span title={checkedStatus ? "Added to Watchlist" : "Add to Watchlist"}><i className={checkedStatus ? "fa fa-check": "fa fa-plus"} style={{
                color: checkedStatus ? "chartreuse" : "tomato"
            }}></i></span></button>
        </div>
    )
}

export default Poster;
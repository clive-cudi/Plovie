import React from 'react';

function Err404({movieName}){
    return (
        <div className="not-found-wrapper">
            <div className="not-found-cont">
                <h1>Oops!! We couldn't find the trailer for <span>{movieName}</span></h1>
            </div>
        </div>
    )
}

export default Err404;
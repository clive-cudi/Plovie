import React from "react";

function Err404({ movieName, message }) {
  return (
    <div
      className="not-found-wrapper"
      style={{
        display: "flex",
        height: "100px",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="not-found-cont"
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <h1 style={{
            color: 'tomato'
        }}>
          {message} ;)
          <span>{movieName}</span>
        </h1>
      </div>
    </div>
  );
}

export default Err404;

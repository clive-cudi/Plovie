import React from "react";

function NavCtrlsLoggedIn({ username }) {
  return (
    <div className="nav-controls">
      <a href="/accountsetup">
        <button className="signup-btn">
          <i className="fa fa-user"></i> {username}
        </button>
      </a>
      <a href="/login">
        <button>
          <i className="fa fa-user"></i> Log out
        </button>
      </a>
    </div>
  );
}

export default NavCtrlsLoggedIn;
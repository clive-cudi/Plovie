import React from "react";

function NavCtrlsNotLoggedIn() {
  return (
    <div className="nav-controls">
      <a href="/signup">
        <button className="signup-btn">
          <i className="fa fa-users"></i> Join the Plug community
        </button>
      </a>
      <a href="/login">
        <button>
          <i className="fa fa-user"></i> Login
        </button>
      </a>
    </div>
  );
}

export default NavCtrlsNotLoggedIn;
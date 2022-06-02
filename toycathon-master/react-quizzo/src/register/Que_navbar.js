import React from "react";

function Que_navbar() {
  return (
    <>
      <nav className="topnav">
       <div className="logo">
           LOGO
       </div>
       <div className="search_bar">
            <input type="text" placeholder="search" name="search_bar" />
            <span className="fa fa-search"></span>
       </div>
       <ol>
           <li><a href="/">Profile</a></li>
           <li><a href="/">Logout</a></li>
       </ol>
      </nav>
    </>
  );
}

export default Que_navbar;

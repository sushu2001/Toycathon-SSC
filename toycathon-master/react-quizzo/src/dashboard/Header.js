///---------------------HEADER CODE BELOW----------------------///

import React from "react";

const Header = () => {
  return (
    <div className="header">
        {/* ----------------For search bar and logo inside the header-------------------- */}
      <div className="leftHeader">
      <a href="#" className="terms">LOGO</a>
        <div className="searchBar">
            <input
            className="search-header"
            type="search"
            placeholder="Search here..."
            label="Search"
            />
            <div className="headbuton">
            <button className="headbtn" type="submit">
                Search
            </button>
            </div>
        </div>
            
        
      </div>
      {/* ----------------practice and enter code buttons in header-------------------- */}
      <div className="rightHeader">
        
        <button className="headbtn mx-2" type="submit">
          Practice
        </button>
        <button className="headbtn" type="submit">
          Enter Code
        </button>
        <div class="dropdown" className="drop">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            
          </button>
          {/* ----------------Bootstrap code: For Downdown-------------------- */}
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button class="dropdown-item" type="button" onClick={"/prof/"}>
                Profile
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Leaderboard
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Logout
              </button>
            </li>
          </ul>
        </div>
    
      </div>
    </div>
  );
};

export default Header;

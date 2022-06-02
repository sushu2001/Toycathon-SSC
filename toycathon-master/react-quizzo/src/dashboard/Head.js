/////--------------------This is not part of the project-------------------////



import React from "react";
import "./Progress.css"
// import {FontAwesomeIcon} from "fontawesome-free";

function Head() {
  return (
    <div class="appHead">
      <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            LOGO
          </a>
         
                
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <nav class="navbar navbar-dark bg-secondary">
            <div class="container-fluid">
                <form class="d-flex">
                <input class="form-control me-2" type="search" className="search-header" placeholder="Search here..."  aria-label="Search"/>
                <button class="btn btn-outline-success" className="head-search" type="submit">Search</button>
                </form>
            </div>
            </nav>
          <div class="collapse navbar-collapse" className="header" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Practice
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Enter Code
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li> */}
              <li class="nav-item dropdown"  >
                <a
                  class="nav-link active dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                   
                <img src="person.jpg" style={{height: "20px", borderRadius: "20px"}} className="personIcon"/>
               

                </a>
               
                <ul
                  class="dropdown-menu" id="dropBar"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Leaderboard
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Head;

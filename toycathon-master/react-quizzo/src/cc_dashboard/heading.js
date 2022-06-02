import React, { useState } from "react";

const Heading = () => {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  // let Links = [

  //   {name: "Practice", link:"/"},
  //   {name: "Enter Code", link:"/"},
  // ]

  return (
    <div className="flex justify-items-center float-right">
      <div className="shadow-md w-full fixed bg-gray top-0 left-0">
        <div className="md:flex justify-between bg-dark py-4">
          <div className="font-bold font-[sans-seriff] text-white cursor-pointer flex items-center text-exl">
            <span>
              <ion-icon name="aperture"></ion-icon>
            </span>
            LOGO
          </div>

          {/* --------------------search bar---------------- */}
          <div class="flex">
            <div class="mb-3 xl:w-96">
              <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                <input
                  type="search"
                  class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal 
            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 
            focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  type="button"
                  id="button-addon2"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    class="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/*--------------------------------- practice and enter contest------------------------------ */}
          <ul className="md:flex md:items-center text-white">
            {/* {
          Links.map((link) => (
            <li>
              <a href={Links.link}> {Links.name}</a>           </li>
          ))
        } */}
            <div className="flex justify-around">
              <span></span>
              Practice</div>
            <div>Enter Contest</div>
          </ul>
  



        {/* ---------------------------------------DROPDOWN__--------------------------- */}

        <div class=" text-left float-right pr-20px">
          <div>
            <button
              onClick={handleClick}
              type="button"
              class="inline-flex float-right  w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <span>
                <ion-icon name="accessibility-outline"></ion-icon>
              </span>
              Options
              <svg
                class="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {showOptions && (
          <div
            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <a
                href="/"
                class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Profile
              </a>
              <a
                href="/"
                class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Leaderboard
              </a>
              <a
                href="/"
                class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                Logout
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
</div>
  );
};

export default Heading;

import React, { useState } from "react";

const NewHeader = () => {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div class="bg-black top-8 flex justify-between">
      <div>
        <ul class="flex">
          <li class="mr-6">
            <a class="text-white hover:text-blue-800 " href="#">
              LOGO
            </a>
          </li>

          <div class="flex ">
            <div class="mb-3 xl:w-96">
              <div class="input-group relative flex  items-stretch w-full mb-4">
                <input
                  type="search"
                  class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon3"
                />
              </div>
            </div>
          </div>
          <li class="mr-6 flex-nowrap">
            <a class="text-white hover:text-blue-800" href="#">
              Create Quiz
            </a>
          </li>
          <li class="mr-6">
              <a class="text-white hover:text-blue-800" href="#">
                View Quiz
              </a>
          </li>
        </ul>
      </div>
               
                 
      

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
                <ion-icon name="aperture"></ion-icon>
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
            class="origin-top-right absolute top-8 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
           id="options"
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
                <span><ion-icon name="aperture"></ion-icon></span>
                Profile
              </a>
              <a
                href="/"
                class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                <span><ion-icon name="aperture"></ion-icon></span>
                Leaderboard
              </a>
              <a
                href="/"
                class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                <span><ion-icon name="log-out"></ion-icon></span>
                Logout
              </a>
            </div>
          </div>
        )}
      </div>
    
  );
};

export default NewHeader;

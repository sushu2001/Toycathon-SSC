import React from 'react'
import {Link} from 'react-router-dom'

 const Header = () => {
  return (
      <nav x-data="{show:false}" class="flex flex-row bg-[#35363A] p-4 ">
        <div>
            <Link to={'/'} class="text-white text-xl">
                LOGO
            </Link>
        </div>

        <div class="block md:hidden ">
            <button
                class="flex items-center px-3 py-2 border rounded text-gray-100 border-gray-200 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>
        <div class="{ 'block': show, 'hidden': !show } w-full block flex-grow md:flex md:justify-end md:w-auto">
            <div>
               {/* <Link to={'/entercode'}
                    class="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">Enter Code</Link>
                <Link to={'/login'}
                    class="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">Login</Link> */}
                {/* <a href="#"
                    class="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">Register</a> */}

            </div>
        </div>
    </nav>
  );
}

export default Header;
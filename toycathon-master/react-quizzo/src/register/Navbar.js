import React from 'react'

function header() {
    return (
        
    <>
    <nav className='flex flex-row bg-gray-800 p-4'>
        <div className='text-white'>
        <a href="/">
            LOGO

        </a>
       </div>
        <div class="block md:hidden ">
            <button 
                className="flex items-center px-3 py-2 border rounded text-gray-100 border-gray-200 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>

        <div className="{ 'block': show, 'hidden': !show }"
            class="w-full block flex-grow md:flex md:justify-end md:w-auto">
            <div>
                <a href="/"
                    className="block md:inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">Login</a>
               

            </div>
        </div>
    </nav>
    </>

  )
}

export default header
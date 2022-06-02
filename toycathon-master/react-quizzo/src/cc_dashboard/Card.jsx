import React from "react";
import {  Link } from "react-router-dom";

const Card = () => {
  return (
    <div class="App-header">
    <div class="bg-[#f3a7b2] h-80  shadow-xl hover:shadow-none cursor-pointer w-9/12 rounded-3xl flex flex-row items-center justify-center transition-all duration-500 ease-in-out">
      <div class="relative mt-2 mx-2">
        <div class=" rounded-2xl overflow-hidden">
          <div class="pt-20 pb-6 w-full text-4xl  px-6">
            <Link to={{ pathname: `/public_q` }}>
            <span ><ion-icon name="add-circle-outline"></ion-icon></span>
            </Link>
          </div>
          <div class="font-medium content-center">
            Add Quiz 
            </div>
         
        </div>
        
            
      </div>
    </div>
    </div>
  );
};

export default Card;
import React from "react";
import { useState, useEffect, useRef } from "react";
import "./joinwithcode.css";



const Comp = () => {
  const [Q_Code, setQ_Code] = useState("");
  const [Name, setName] = useState("");
  return (
    <div className="entercode">
    <div className="form">
     <h3 class="font-bold text-2xl text-black">Join With Code</h3>
      <form>
        
        <div className="input1">
          {/* <h1>Quiz Code :</h1> */}
          <input
         
            type="text"
            placeholder="Quiz Code"
            className="quizcode"
            value={Q_Code}
            onChange={(e) => {
              setQ_Code(e.target.value);
            }}
          />
          <br />
        </div>
        <div className="input2">
          {/* <h1>Your Name :</h1> */}
          <input
            type="text"
            placeholder="Your Name"
            className="quizname"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
      </form>
      <button className="btn">Go To Quiz</button>
    </div>
    </div>
    // <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
    //  <section>
    //      <h3 class="font-bold text-2xl">Join With Code</h3>
    //      {/* <p class="text-gray-600 pt-2">Sign in to your account.</p> */}
    //   </section>
    //   <section class="mt-10">
    //     <form class="flex flex-col" method="POST" action="#">
    //         <div class="mb-6 pt-3 rounded bg-gray-200">
    //             <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
    //             <input type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"/>
    //         </div>
    //         <div class="mb-6 pt-3 rounded bg-gray-200">
    //             <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
    //             <input type="password" id="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"/>
    //         </div>
    //         <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Go To Quiz</button>
    //     </form>
    //   </section>
    // </main>
  );
};

export default Comp;

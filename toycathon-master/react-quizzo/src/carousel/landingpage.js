import React from "react";
import "./landing.css"
import ImageSlider from "./Carousel";
import SliderData from "./SliderData";
import {useNavigate}  from 'react-router-dom'

function Landingpage() {
    let navigate = useNavigate();
    const handleClick = e => {
        e.preventDefault();
        navigate('/register');
    }
  return (
    <div className="App">
    <div className="sec1">
      <ImageSlider slides={SliderData} />
    </div>
    <div className="sec2">
      <h1 className="heading">
        The 100% Engagement <br /> Platform
      </h1>
      <br />
      <br />
      <h3 className="subheading">
        Find and create free gamified quizes and interactive
        <br />
        lessond to engage any learner
      </h3>
      <br />
      <br />
      <br />
      <br />
      <div className="linkdiv">
        <button className="signupbutton" onClick={handleClick} >Sign Up</button>
        <a className="learnlink">
          <b>
            Learn more <span>{">"}</span>
          </b>
        </a>
      </div>
    </div>
  </div> 
  );
}
export default Landingpage
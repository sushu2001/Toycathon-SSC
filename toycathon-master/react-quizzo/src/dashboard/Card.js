import React, { useEffect,useState } from "react";
import "./Progress.css";
import {useNavigate}  from 'react-router-dom';



function Card() {
  const [Name,fetchName] = useState([])
  const getData=()=>{
    fetch("http://127.0.0.1:8000/notes/",{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        fetchName(res)
    })
    .then(error=>console.log(error))
   
   }
   useEffect(() =>{
     getData()
   },[])
    let navigate = useNavigate();
    const handleClick = e => {
        e.preventDefault();
        navigate('/ques');
    }
    let element;
    if(Name.length > 0){
         element =Name[0];  
    }
    return (
        <>
        <div className="card1">
          {/* ----------------Cont-1: For Contents inside each card -------------------- */}
          <div className="cont1">
            {/* <img src= "./"/> */}
            <h2>
              {/* <ul>
              {
              Name.map((item)=>{
                return <li key={item.id} >{item.id}</li>
              })
              }
              </ul> */}
              {Name.length >0 && Name[0].id}
              </h2>
            <br></br>
            <br></br>
            <br></br>
          </div>
          {/* ----------------des-1: For quiz description to one side -------------------- */}
          <div className="des1">
          
            <div className="Play">
            {Name.length >0 && Name[0].domain}<br></br>
              Duration: 3hrs<br></br>
              Level: Easy<br></br>
              {/* ----------------proplay : for play button -------------------- */}
              <button type="button"  onClick={handleClick} className="proplay">
                Play
              </button>
            </div>
            {/* ----------------For complete animation of progress circle-------------------- */}
            <div className="progress blue"> 
            {/* ----------------For lft animation of progress circle-------------------- */}
              <span className="progress-left"> <span className="progress-bar"></span> 
            </span> 
            {/* ----------------For right animation of progress circle-------------------- */}
            <span className="progress-right"> <span className="progress-bar"></span> </span>

            {/* ----------------for displaying progess value indside the circle-------------------- */}
            <div className="progress-value">100%</div>
            </div>
          </div>
        </div>
        </>
    );
}
export default Card;
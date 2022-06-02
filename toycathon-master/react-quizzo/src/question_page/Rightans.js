import React from 'react'
import Popup from 'reactjs-popup'

function Rightans(props) {
  return (props.trigger) ?(
    <div className='Container'> 
        <p>
        Thank you 
        </p>
        <p>Your Score is</p>
        {props.children}
      
       <button className='btn'>Go To Home</button>
      
    </div>
  ):"";
}

export default Rightans;
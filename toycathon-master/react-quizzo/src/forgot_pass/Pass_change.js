import React from 'react'
import "./pass_change.css";
import DjangoCSRFToken from 'django-react-csrftoken';

function Forgot_passward() {
  return (
    <div className='Container1'>
      <form action="">
      <DjangoCSRFToken/>
       <label htmlFor="" className='new_pass_input'>Enter New Password :</label>
       <input type="password" className='new_pass_input new_pass_' placeholder='Enter new password' name='new_pass' />
       <div>
       <label htmlFor="" className='con_pass_input'>Confirm Password :</label>
       <input type="password" className='con_pass_input new_pass_' placeholder='Confirm password' name='confirm_pass' />
       </div>
       <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Forgot_passward;
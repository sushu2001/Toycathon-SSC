import React from "react";
import "./Css/regform.css"
import DjangoCSRFToken from 'django-react-csrftoken'

function form() {
  return (
    <div className="parent">
    <form action="/register_attempt/" className="text-black" method="POST">
      <DjangoCSRFToken/>
      <div className=" w-3/4 mx-auto my-8 space-x-96 px-4 space-y-4 m-8 text-black">
        <div className="flex justify-center flex-col mx-auto w-3/2 ">
          <div className="flex space-x-4 ">
            <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1 ">
              <div className="px-1 flex items-center ">
                <label className="mb-4 text-white">First Name</label>
                <input
                  type="text"
                  name="fname"
                  required
                  placeholder="Enter first name"
                  className="text-black mt-1 px-2 py-1 border rounded-lg  w-1/2 m-5 mr-8"
                />
              </div>
            </div>

            <div className="lg:w-1/2  mb-3 lg:mb-2 mx-1 px-6">
              <div className="px-1 ">
                <label className="text-white">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  required
                  placeholder="Enter last name"
                  className="text-black mt-1 px-2 py-1 border rounded-lg w-1/2 m-5 mr-5"
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="lg:w-1/2  mb-3 lg:mb-2 mx-1">
              <div className="flex items-center">
                <label className="mb-5 mr-6 text-white">Email id</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter email-id "
                  className="text-black mt-1 px-2 py-1 border rounded-lg w-1/2 m-5"
                />
              </div>
            </div>

            <div className="lg:w-1/2  mb-3 lg:mb-2 mx-1 px-6">
              <div className="px-1">
                <label className="text-white">Phone no :</label>
                <input
                  type="text"
                  name="phn_no"
                  required
                  placeholder="Enter your Phone no"
                  className="text-black   mt-1 px-2 py-1 border rounded-lg w-1/2 m-5"
                  maxLength={10}
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="lg:w-1/2  mb-3 lg:mb-2 mx-1">
              <div className="flex items-center">
                <label className="mb-4 mr-10 text-white">DOB :</label>
                <input
                  type="date"
                  required
                  name="dob"
                  className="text-black mt-1 px-2 py-1 border rounded-lg w-1/2 m-5"
                />
              </div>
            </div>
            <div className="flex items-center px-5">
              <label className="block mb-2 text-white">Select Gender :</label>
            </div>
            <div className="flex">
              <div className="flex items-center mb-2 mr-4">
                <input
                  type="radio"
                  id="radio-example-1"
                  name="gender"
                  value="male"
                  className="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2"
                />
                <label for="radio-example-1" required className="text-white">
                  Male
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="radio-example-2"
                  name="gender"
                  value="female"
                  className="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2"
                />
                <label for="radio-example-2" className="text-white">
                  Female
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table className="ml-auto mr-auto">
        <tr>
          <td className="py-4 text-white">
            <label for="" class="">
              Select Roles :
            </label>
          </td>
          <td className="py-4 text-black">
            <select
              class="w-full border bg-white text-back rounded-xl px-2 py-1 outline-none ml-4"
              name="role" required
            >
              <option className="py-1 text-white" value="student">
                Student
              </option>
              <option className="py-1" value="creator">
                Content Creator
              </option>
              <option className="py-1" value="approver">
                Content Approver
              </option>
            </select>
          </td>
        </tr>
        <tr>
          
            <td className="py-4 text-white">
              <label className="mr-1 px-1">User Name :</label>
            </td>
            <td className="py-4">
              <input
                type="text"
                name="username"
                placeholder="Enter User Name"
                className="text-black w-full h-1/2 mt-1 px-2 py-1  ml-4 border rounded-lg "
                required
              />
            </td>
          
        </tr>
        <tr>
        <td className="py-4 pr-5">
       <label className="text-white">Password :</label>
       </td>
       <td>
        
       <input type='password' name="pass" placeholder="Password"
                        className="text-black mt-1 w-full h-1/2 px-2 py-1 ml-4 border rounded-lg mr-4  "required  />
       </td>
        </tr>
      <tr>
       <td className="py-4 pl-4">
       <label className="text-white">Confirm password :</label>
       </td>
       <td>
        
       <input type='password' name="confpass" placeholder="Confirm Password"
                        className="text-black mt-1 w-full h-1/2 px-2 py-1 ml-4 border rounded-lg mr-4  "required  />
       </td>
        </tr>
      </table>

      <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full flex mx-auto mt-8 mb-12" name="submitbtn">
            Submit
        </button>
    </form>
    </div>
  );
}

export default form;

import React, {  useState, useEffect } from 'react';
import "./css/pro.css";
import {Link, useParams} from 'react-router-dom';
// from django.db import models;
// from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


const ProForm = () => {
    const { id } = useParams();
    let userId = (id)
    let [user, setUser] = useState(null)
    let [profile, setProfile] = useState(null)

    useEffect(() =>{
        getUser()
    }, [userId])
    useEffect(()=>{
        getProfile()
    })
   let getUser = async() =>{
       let url = 'http://127.0.0.1:8000/users/'+userId+'/'
        let response = await fetch(url)
        // let response1 = await fetch('http://127.0.0.1:8000/profile/Deepa/')
        let data = await response.json()
        console.log('DATA : ',data)
        setUser(data)
    }
    let getProfile = async() =>{
        let url1 = 'http://127.0.0.1:8000/profile/'+user.username+'/'
        let response1 = await fetch(url1)
        let data1 = await response1.json()
        console.log('DATA : ',data1)
        setProfile(data1)
    }
    return (
        <>
            <div className="profbg">
            <div className="sidebar">
                <div className="profile">
                    <img className="pic" alt='img' src="https://images.pexels.com/photos/4925916/pexels-photo-4925916.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" ></img>
                    <h5 className="user">{user?.username}</h5>
                </div>

                <div className="menu">
                    <h4><Link className="one" to={''}>Edit profile</Link></h4><br />
                    <h4><Link className="one" to={''}>Progess</Link></h4><br />
                    <h4><Link className="one" to={''}>Logout</Link></h4>
                </div>
            </div>

            <form className="profform" >
                <div>
                    <table className="proTable">
                        <tr>
                            <td className="llable">First Name </td>
                            {/* <td> <input className="signInput" type="text" name="fname" id="fname" autoComplete="off" /></td> */}
                            <td id="fname"> <b> {user?.first_name}</b></td>
                            <td>Last Name</td>
                            {/* <td><input className="signInput" type="text" name="lname" id="lname" autoComplete="off" /></td> */}
                            <td id="fname"><b>{user?.last_name}</b></td>
                        </tr>

                        <tr>
                            <td className='llable' >Email ID </td>
                            {/* <td> <input className="signInput" type="text" name="email" id="email" autoComplete="off" /></td> */}
                            <td id="fname"><b>{user?.email}</b></td>
                            <td>Phone No</td>
                            {/* <td><input className="signInput" type="text" name="phone" id="phone" autoComplete="off" /></td> */}
                            <td id="fname"><b>{profile?.mobile_number}</b></td>
                        </tr>

                        <tr>
                            <td className='llable'>Date of Birth </td>
                            {/* <td> <input className="signInput" type="date" name="Date" id="Date" /></td> */}
                            <td id="fname"><b>{profile?.dob}</b></td>
                            <td>Gender</td>
                            <td>
                            <td id="fname"><b>{profile?.gender}</b></td>
                                {/* <input className="signInput" type="radio" name="Gender" id="male" />Male
                                <input className="signInput" type="radio" name="Gender" id="female" />Female */}
                            </td>
                        </tr>


                    </table>

                </div>
            </form>
            </div>

        </>
    )
}

export default ProForm

import React from 'react'
import style from './SignUp.module.css'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
      
      const handleSubmit = async(e) => {
        e.preventDefault();
        try{
        const response= await axios.post('http://localhost:5600/register',{username,password},{withCredentials: true});
        console.log(response.data);
        navigate('/');
        }catch(err){
          console.log(err.message);
        }
        setUsername("");
        setPassword("");
    };
  return (
    <form action="">
    <div className={style["signup-container"]}>
        <h1>SignUp</h1>
        <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} name='username' placeholder='Enter your username'/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='Enter your password'/>
        <button type='submit' onClick={(e)=>handleSubmit(e)}>SignUp</button>
    </div>
    </form>
  )
}

export default SignUp
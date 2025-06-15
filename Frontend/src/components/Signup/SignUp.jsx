import React from 'react'
import style from './SignUp.module.css'
import { useState } from 'react';

const SignUp = () => {
    const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username,password);
        
        setUsername("");
        setPassword("");
    };
  return (
    <form action="">
    <div className={style["signup-container"]}>
        <h1>SignUp</h1>
        <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} name='email' placeholder='Enter your email'/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='Enter your password'/>
        <button type='submit' onClick={(e)=>handleSubmit(e)}>SignUp</button>
    </div>
    </form>
  )
}

export default SignUp
import React from "react";
import style from "./Login.module.css";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";
import { useContext } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();
  const {setUserInfo}= useContext(userContext); 
  const handleSubmit = async(e) => {
    e.preventDefault();
   try{ 
    const response= await axios.post('http://localhost:5600/login',{username,password},{withCredentials: true});
    const user= response.data.username;
    setUserInfo(user);
    navigate('/');
   }catch(err){
    console.log(err);
   }
    setUsername("");
    setPassword("");
};


  return (
    <form action="">
      <div className={style["login-container"]}>
        <h1>Login</h1>
        <input
          type="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;

import React from "react";
import style from "./Login.module.css";
import { useState } from "react";
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(username,password);
    const response= await axios.post('http://localhost:5600/login',{username,password});
    console.log(response.data);
    setUsername("");
    setPassword("");
};


  return (
    <form action="">
      <div className={style["login-container"]}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your email"
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

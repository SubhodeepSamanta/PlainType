import React from "react";
import style from "./Login.module.css";
import { useState } from "react";

const Login = () => {
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

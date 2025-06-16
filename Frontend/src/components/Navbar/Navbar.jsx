import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { userContext } from '../../context/userContext'

const Navbar = () => {
  const {userInfo, setUserInfo}= useContext(userContext)
  const fetchProfile=async()=>{
    const response= await axios.post('http://localhost:5600/profile',{},{ withCredentials: true});
    setUserInfo(response.data.username);
  }
  useEffect(()=>{
    const fetchData = async () => {
  try {
    await fetchProfile();
  } catch (err) {
    console.error("Profile fetch failed", err);
    setUserInfo(null);
  }
};
fetchData();

  },[]);

  const username=userInfo.username;
  return (
    <div className={styles["navbar"]}>
        <Link to="/"><h1 className={styles["logo"]}>PlainType</h1></Link>
        <div className={styles["links"]}>
          {username?
            <>
            <Link to="/create">Create a new Post</Link>
            <Link to="/logout">logout</Link>
            </>
          :
            <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>
          }
        </div>
    </div>
  )
}

export default Navbar
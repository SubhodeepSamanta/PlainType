import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
        <Link to="/"><h1 className={styles["logo"]}>PlainType</h1></Link>
        <div className={styles["links"]}>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </div>
    </div>
  )
}

export default Navbar
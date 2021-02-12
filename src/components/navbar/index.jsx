import React from "react";
import styles from "./styles.module.css";
import MCGLogo from "../../assets/MCGLogo.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <NavLink to='/'>
          <img className={styles.logo} src={MCGLogo} alt='Logo' />
        </NavLink>
      </div>
    </div>
  );
}

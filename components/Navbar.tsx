import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navBarList}>
        <li>About</li>
        <li>Discover</li>
        <li id={styles.logo}>Viewr</li>
        <li>Users</li>
        <li>Account</li>
      </ul>
    </nav>
  );
};

export default Navbar;

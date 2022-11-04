import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  const [routePath, setRoutePath] = useState(router.asPath);

  return (
    <nav className={styles.navBar}>
      <ul className={styles.navBarList}>
        <li className={routePath == "/about" ? styles.active : ""}>
          <Link href="/about">About</Link>
        </li>
        <li className={routePath == "/discover" ? styles.active : ""}>
          <Link href="/discover">Discover</Link>
        </li>
        <li id={styles.logo}>Viewr</li>
        <li className={routePath == "/users" ? styles.active : ""}>
          <Link href="/users">Users</Link>
        </li>
        <li className={routePath == "/account" ? styles.active : ""}>
          <Link href="/account">Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

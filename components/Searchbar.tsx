import React from "react";
import styles from "./Searchbar.module.css";

const Searchbar = () => {
  return (
    <div className={styles.searchBar}>
      <input placeholder="Minimal Photography" />
      <button>Search</button>
    </div>
  );
};

export default Searchbar;

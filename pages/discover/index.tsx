import React from "react";
import Searchbar from "../../components/Searchbar";
import styles from "./Discover.module.css";

const Discover = () => {
  return (
    <div className={styles.discover}>
      <header>
        <Searchbar />
      </header>
    </div>
  );
};

export default Discover;

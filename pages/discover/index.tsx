import React from "react";
import Searchbar from "../../components/Searchbar";
import styles from "./Discover.module.css";

const Discover = () => {
  return (
    <main className={styles.discover}>
      <header>
        <Searchbar />
        <blockquote className={styles.blockQuote}>
          <p>
            Discover the perfect image for your design
            <span className={styles.dot}></span>
          </p>
          <cite>
            <span>&mdash;&mdash;&mdash; Photographed by:</span>{" "}
            <span>Maarten bouwkamp</span>
          </cite>
        </blockquote>
      </header>
    </main>
  );
};

export default Discover;

import React from "react";
import PhotographerCard from "../../components/Photographers/PhotographerCard";
import Searchbar from "../../components/Searchbar/Searchbar";
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
            <span className={styles.citeDescription}>
              &mdash;&mdash;&mdash; Photographed by: {""}
            </span>
            <span className={styles.citeName}>Maarten bouwkamp</span>
          </cite>
        </blockquote>
      </header>

      <section className={styles.photographers}>
        <h2 className={styles.sectionTitle}>Photographers</h2>
        <div className={styles.photographersRow}>
          <PhotographerCard />
          <PhotographerCard />
          <PhotographerCard />
          <PhotographerCard />
        </div>
      </section>

      <section className={styles.photos}></section>
    </main>
  );
};

export default Discover;

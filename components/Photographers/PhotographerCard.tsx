import React from "react";
import styles from "./PhotographerCard.module.css";
import Image from "next/image";

const PhotographerCard = () => {
  return (
    <article className={styles.photographerCard}>
      <Image
        width={100}
        className={styles.image}
        height={100}
        alt="Photographer"
        src="/image.png"
      />
      <div className={styles.description}>
        <p className={styles.name}>Ivy Madison</p>
        <p className={styles.photoTotal}>1.412 Photos</p>
      </div>
    </article>
  );
};

export default PhotographerCard;

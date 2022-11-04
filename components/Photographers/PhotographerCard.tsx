import React from "react";
import styles from "./PhotographerCard.module.css";
import Image from "next/image";

interface PhotographerCardInterface {
  nameProfile: string;
  totalPhotos: number;
  profileImage: string;
}

const PhotographerCard = ({
  nameProfile,
  totalPhotos,
  profileImage,
}: PhotographerCardInterface) => {
  return (
    <article className={styles.photographerCard}>
      <Image
        width={100}
        className={styles.image}
        height={100}
        alt="Photographer"
        src={profileImage}
      />
      <div className={styles.description}>
        <p className={styles.name}>{nameProfile}</p>
        <p className={styles.photoTotal}>{totalPhotos} Photo&apos;s</p>
      </div>
    </article>
  );
};

export default PhotographerCard;

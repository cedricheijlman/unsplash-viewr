import Image from "next/image";
import React from "react";
import styles from "./Photocard.module.css";

interface PhotoCardInterface {
  creator: string;
  photographImage: string;
  publishDate: string;
  totalLikes: number;
  downloadLink: string;
}

const PhotoCard = ({
  creator,
  photographImage,
  publishDate,
  totalLikes,
  downloadLink,
}: PhotoCardInterface) => {
  return (
    <article className={styles.photoCard}>
      <Image
        src={photographImage}
        alt="Photo"
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </article>
  );
};

export default PhotoCard;

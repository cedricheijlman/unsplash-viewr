import Image from "next/image";
import React from "react";
import styles from "./Photocard.module.css";
import type { activePhoto } from "../activePhotoType";

interface PhotoCardInterface {
  creator: string;
  photographImage: string;
  publishDate: string;
  totalLikes: number;
  downloadLink: string;
  photoIndex: number;
  activePhoto: activePhoto;
  setActivePhoto: any;
}

const PhotoCard = ({
  creator,
  photographImage,
  publishDate,
  totalLikes,
  downloadLink,
  photoIndex,
  activePhoto,
  setActivePhoto,
}: PhotoCardInterface) => {
  const makePhotoActive = () => {
    setActivePhoto({
      index: photoIndex,
      creator,
      photographImage,
      publishDate,
      totalLikes,
      downloadLink,
    });
  };

  return (
    <article onClick={makePhotoActive} className={styles.photoCard}>
      <Image
        src={photographImage}
        alt="Photo"
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />

      {activePhoto.index == photoIndex ? (
        <>
          <div className={styles.creator}>
            <h1>{creator}</h1>
          </div>
        </>
      ) : (
        ""
      )}
    </article>
  );
};

export default PhotoCard;

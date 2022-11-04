import { GetStaticProps } from "next";
import React, { useState } from "react";
import PhotographerCard from "../../components/Photographers/PhotographerCard";
import PhotoCard from "../../components/Photos/PhotoCard";
import Searchbar from "../../components/Searchbar/Searchbar";
import styles from "./Discover.module.css";
import type { activePhoto as activePhotoType } from "../../components/activePhotoType";
import Image from "next/image";
import Link from "next/link";

const Discover: React.FC = ({ photos }: any) => {
  const [activePhoto, setActivePhoto] = useState<activePhotoType>({
    index: 99,
    creator: "",
    photographImage: "",
    publishDate: "",
    totalLikes: 0,
    downloadLink: "",
  });

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
          {photos
            .filter((_: [], i: number) => i < 4)
            .map((photo: any[any], i: number) => {
              console.log(photos);
              return (
                <PhotographerCard
                  profileImage={photo.user.profile_image.large}
                  totalPhotos={photo.user.total_photos}
                  nameProfile={photo.user.name}
                  key={i}
                />
              );
            })}
        </div>
      </section>

      <section className={styles.photos}>
        <h2 className={styles.sectionTitle}>Photos</h2>
        <div className={styles.photoGallery}>
          {photos.map((photo: any[any], i: number) => {
            return (
              <PhotoCard
                photoIndex={i}
                activePhoto={activePhoto}
                setActivePhoto={setActivePhoto}
                downloadLink={photo.links.download}
                key={i}
                publishDate={photo.created_at}
                totalLikes={photo.likes}
                creator={photo.user.name}
                photographImage={photo.urls.regular}
              />
            );
          })}
          {activePhoto.index < 10 && (
            <div className={styles.photoDetails}>
              <Image
                src={activePhoto.photographImage}
                alt="PhotoImage"
                width={100}
                height={100}
              />

              <div className={styles.photoDetailsDiv}>
                <p className={styles.photoDescription}>
                  Description about the picture
                </p>
                <p className={styles.creatorName}>{activePhoto.creator}</p>
              </div>
              <div className={styles.photoDetailsInfo}>
                <div className={styles.photoDetailsDiv}>
                  <h4>{activePhoto.totalLikes}</h4>
                  <p>Total Likes</p>
                </div>
                <div className={styles.photoDetailsDiv}>
                  <h4>{activePhoto.totalLikes}</h4>
                  <p>Total Likes</p>
                </div>
              </div>
              <button>
                <Link target="_blank" href={activePhoto.downloadLink}>
                  Download
                </Link>
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `https://api.unsplash.com/photos/random/?client_id=${process.env.ACCESS_KEY}&count=10`
  );

  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};

export default Discover;

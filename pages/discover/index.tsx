import { GetStaticProps } from "next";
import React, { useEffect } from "react";
import PhotographerCard from "../../components/Photographers/PhotographerCard";
import PhotoCard from "../../components/Photos/Photocard";
import Searchbar from "../../components/Searchbar/Searchbar";
import styles from "./Discover.module.css";

const Discover: React.FC = ({ photos }: any) => {
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
                downloadLink={photo.links.download}
                key={i}
                publishDate={photo.created_at}
                totalLikes={photo.likes}
                creator={photo.user.name}
                photographImage={photo.urls.regular}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `https://api.unsplash.com/photos/?client_id=${process.env.ACCESS_KEY}`
  );

  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};

export default Discover;

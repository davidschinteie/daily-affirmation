"use client";

import React from "react";
import styles from "./imageCard.module.css";

interface ImageCardProps {
  imageSrc: string | null;
  loading: boolean;
}

const ImageCard = ({ imageSrc, loading }: ImageCardProps) => {
  return (
    <div className={styles.imageLoaderContainer}>
      {loading && (
        <div className={styles.loadingSpinner}>
          <div className={styles.spinner}></div>
          <p>Creating Image...</p>
        </div>
      )}
      {!loading && imageSrc && <img src={imageSrc} alt="Generated" />}
    </div>
  );
};

export default ImageCard;

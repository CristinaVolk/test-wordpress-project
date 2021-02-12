import React from "react";
import { MotionGallery } from "../../components/motion-gallery/";
import { AnimeFooter } from "../../components/anime-footer";
import styles from "./styles.module.css";

export default function AboutPage() {
  return (
    <div className={styles.aboutPageContainer}>
      <MotionGallery />
      <AnimeFooter />
    </div>
  );
}

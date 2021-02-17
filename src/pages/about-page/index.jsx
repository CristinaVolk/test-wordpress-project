import React from "react";
import { MotionGallery } from "../../components/motion-gallery/";
import styles from "./styles.module.css";

export default function AboutPage() {
  return (
    <div className={styles.aboutPageContainer}>
      <MotionGallery />
    </div>
  );
}

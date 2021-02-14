import React from "react";
import Anime from "react-anime";
import styles from "./styles.module.css";

export const AnimeFooter = () => (
  <div className={styles.ballsContainer}>
    <Anime
      easing='easeOutElastic'
      loop={true}
      duration={5000}
      direction='alternate'
      delay={(el, index) => index * 270}
      translateX='40rem'
      scale={[0.15, 0.9]}
    >
      <div className={styles.first} />
      <div className={styles.second} />
      <div className={styles.third} />
    </Anime>
  </div>
);

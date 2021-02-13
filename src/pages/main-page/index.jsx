import React from "react";
import { useOnResize } from "../../common/hooks/useOnResize.js";
import LineIcon from "../../assets/lineIcon.png";
import ArrowIcon from "../../assets/right-arrow-icon.png";
import { CustomParticleEffect } from "../../components/custom-particle-effect";
import styles from "./styles.module.css";

const sizeOnChange = 1000;

export default function MainPage() {
  const { isMobile } = useOnResize(sizeOnChange);
  const particleOptions = {
    direction: "top",
  };

  return (
    <div className={styles.mainPageWrapper}>
      <div className={styles.verticalLineOne}></div>
      <div className={styles.verticalLineTwo}></div>
      <div className={styles.mainPageContainer}>
        <div className={styles.leftPartMainContainer}>
          <div className={styles.lineOne}>
            <p>01</p>
            <img className={styles.lineIcon} src={LineIcon} alt='small-line' />
            <p>02</p>
            <p>Welcome</p>
          </div>

          <p className={styles.lineTwo}>Creating Human engagement.</p>
          <p className={styles.lineThree}>through technology</p>

          <div className={styles.lineFour}>
            <img className={styles.arrowIcon} src={ArrowIcon} alt='arrow' />
            <p className={styles.textFourLine}>discover mcg</p>
          </div>
        </div>

        <CustomParticleEffect
          content={
            <div className={styles.mainLabel}>
              <div>Human</div>
              <div>Engagement</div>
            </div>
          }
          hidden={isMobile}
          particleOptions={particleOptions}
        ></CustomParticleEffect>
      </div>
      <div className={styles.mainPageFooter}></div>
    </div>
  );
}

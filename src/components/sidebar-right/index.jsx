import React from "react";
import { useComponent } from "./hook";
import FacebookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram-icon.png";
import TwitterIcon from "../../assets/twitter-icon.png";
import { socialMediaLinks } from "../../utils/socialMediaLinks";
import styles from "./styles.module.css";

export default function SideBarRight() {
  const { language, handleClick } = useComponent();

  return (
    <div className={styles.rightSidebarContainer}>
      <button
        className={styles.switchLangButton}
        onClick={handleClick}
        value={language}
      >
        {language}
      </button>
      <div className={styles.welcomeText}>Welcome to MCG</div>
      <div className={styles.socialMediaIconsContainer}>
        <a href={socialMediaLinks.facebook}>
          <img
            src={FacebookIcon}
            alt='facebook'
            className={styles.socialMediaIcons}
          />
        </a>
        <a href={socialMediaLinks.instagram}>
          <img
            src={InstagramIcon}
            alt='instagram'
            className={styles.socialMediaIcons}
          />
        </a>
        <a href={socialMediaLinks.twitter}>
          <img
            src={TwitterIcon}
            alt='twitter'
            className={styles.socialMediaIcons}
          />
        </a>
      </div>
    </div>
  );
}

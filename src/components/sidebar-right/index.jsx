import React, { useState } from "react";
import FacebookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram-icon.png";
import TwitterIcon from "../../assets/twitter-icon.png";
import styles from "./styles.module.css";

const links = {
  facebook: "https://m.facebook.com/profile.php?id=469568180296191",
  twitter: "https://twitter.com/MyCleverGroup",
  instagram: "https://www.instagram.com/myclevergroup/",
};

export default function SideBarRight() {
  const [language, setLanguage] = useState("En");

  const handleClick = (event) => {
    const newValue = event.target.value === "En" ? "Ru" : "En";
    setLanguage(newValue);
  };

  return (
    <div className={styles.rightSidebarContainer}>
      <button
        className={styles.firstChild}
        onClick={handleClick}
        value={language}
      >
        {language}
      </button>
      <div className={styles.secondChild}>Welcome to MCG</div>
      <div className={styles.thirdChild}>
        <a href={links.facebook}>
          <img
            src={FacebookIcon}
            alt='facebook'
            className={styles.socialMediaIcons}
          />
        </a>
        <a href={links.instagram}>
          <img
            src={InstagramIcon}
            alt='instagram'
            className={styles.socialMediaIcons}
          />
        </a>
        <a href={links.twitter}>
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

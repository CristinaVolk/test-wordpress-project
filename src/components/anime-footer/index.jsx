import React from "react";
import Anime from "react-anime";
import "./styles.css";

export const AnimeFooter = () => (
  <div>
    <Anime
      easing='easeOutElastic'
      loop={true}
      duration={5000}
      direction='alternate'
      delay={(el, index) => index * 270}
      translateX='63rem'
      scale={[0.75, 0.9]}
    >
      <div className='blue' />
      <div className='green' />
      <div className='red' />
    </Anime>
  </div>
);

import React from "react";
import { NavLink } from "react-router-dom";
import { useOnResize } from "../../common/hooks/useOnResize";
import { useParticleEffect } from "../custom-particle-effect/hook";
import ParticleEffectButton from "react-particle-effect-button";
import styles from "./styles.module.css";

const sizeOnChange = 760;

export default function FooterItem({ contentItem }) {
  const { id, text, address } = contentItem;
  const { isMobile } = useOnResize(sizeOnChange);
  const { onToggle, onAnimationComplete } = useParticleEffect();

  return (
    <ParticleEffectButton
      hidden={isMobile}
      type='rectangle'
      style='stroke'
      size={10}
      direction='top'
      onBegin={onToggle}
      onComplete={onAnimationComplete}
    >
      <NavLink to={address} className={styles.footerLinkItem}>
        <div className={styles.footerItem}>
          <span>{text}</span>
          <span>{id}</span>
        </div>
      </NavLink>
    </ParticleEffectButton>
  );
}

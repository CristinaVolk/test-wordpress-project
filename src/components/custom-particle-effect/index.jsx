import React from "react";
import ParticleEffectButton from "react-particle-effect-button";
import { useParticleEffect } from "./hook";

export const CustomParticleEffect = ({ content, hidden, particleOptions }) => {
  const { onToggle, onAnimationComplete } = useParticleEffect();

  return (
    <ParticleEffectButton
      type='rectangle'
      style='stroke'
      size={10}
      hidden={hidden}
      onBegin={onToggle}
      onComplete={onAnimationComplete}
      {...particleOptions}
    >
      {content}
    </ParticleEffectButton>
  );
};

import { useState } from "react";

export function useParticleEffect() {
  const [animating, setAnimating] = useState(false);

  const onToggle = () => {
    if (animating) return;
    setAnimating(true);
  };

  const onAnimationComplete = () => {
    setAnimating(false);
  };
  return { animating, onToggle, onAnimationComplete };
}

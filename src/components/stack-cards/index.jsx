import React from "react";
import { animated, interpolate } from "react-spring";
import { useComponent } from "./hook";
import styles from "./styles.module.css";

export function Stack({ image, background }) {
  const { f, r, cards, setOpen } = useComponent();

  return (
    <div
      className={styles.stackCardsContainer}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {cards.map(({ z, opacity }, index) => (
        <animated.div
          className={styles.stackCard}
          key={opacity + z + index}
          style={{
            opacity,
            background,
            transform: interpolate(
              [z, f.interpolate([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
              (z, f, r) => `translate3d(0,0,${z}px) rotateX(${f * r}deg)`,
            ),
          }}
        >
          {index === 4 && (
            <animated.img
              className={styles.stackCardImg}
              style={{
                transform: f.interpolate([0, 1], ["scale(0.7)", "scale(1)"]),
              }}
              src={image}
            />
          )}
        </animated.div>
      ))}
    </div>
  );
}

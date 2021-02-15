import { useState } from "react";
import { useSpring, useSprings, animated, interpolate } from "react-spring";

export function useComponent() {
  const [open, setOpen] = useState(false);
  const { f, r } = useSpring({ f: open ? 0 : 1, r: open ? -3 : 3 });
  const cards = useSprings(
    5,
    [0, 1, 2, 3, 4].map((i) => ({
      opacity: 0.2 + i / 5,
      z: open ? (i / 5) * 80 : 0,
    })),
  );
  return { f, r, cards, setOpen };
}

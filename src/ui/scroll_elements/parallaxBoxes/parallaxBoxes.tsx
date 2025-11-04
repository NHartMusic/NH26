import React, { useEffect, useState } from "react";
import styles from "./ParallaxBoxes.module.scss";

const ParallaxBoxes: React.FC = () => {
  const [offsetY, setOffsetY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.box1}
        style={{ transform: `translate(${100}px, ${offsetY * 0.6}px)` }}
      >
        Back Box
      </div>
      <div
        className={styles.box2}
        style={{ transform: `translate(${50}px, ${offsetY * 0.4}px)` }}
      >
        Middle Box
      </div>
      <div
        className={styles.box3}
        style={{ transform: `translate(0, ${offsetY * 0.2}px)` }}
      >
        Front Box
      </div>
    </div>
  );
};

export default ParallaxBoxes;

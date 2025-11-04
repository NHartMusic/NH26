import React, { useEffect, useState } from "react";
import styles from "./ParallaxBoxes.module.scss";

const ParallaxBoxes: React.FC = () => {
  const [offsetY, setOffsetY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to calculate lightened HSL color
  const getLightColor = (baseHue: number, baseSaturation: number, scrollFactor: number) => {
    // Cap the lightness between 50% and 90%
    const lightness = Math.min(50 + scrollFactor * 0.1, 90);
    return `hsl(${baseHue}, ${baseSaturation}%, ${lightness}%)`;
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.box1}
        style={{
          transform: `translate(${100}px, ${offsetY * 0.6}px)`,
          backgroundColor: getLightColor(210, 80, offsetY), // Blue
        }}
      >
        Back Box
      </div>
      <div
        className={styles.box2}
        style={{
          transform: `translate(${50}px, ${offsetY * 0.4}px)`,
          backgroundColor: getLightColor(120, 60, offsetY), // Green
        }}
      >
        Middle Box
      </div>
      <div
        className={styles.box3}
        style={{
          transform: `translate(0, ${offsetY * 0.2}px)`,
          backgroundColor: getLightColor(0, 70, offsetY), // Red
        }}
      >
        Front Box
      </div>
    </div>
  );
};

export default ParallaxBoxes;

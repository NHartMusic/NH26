import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Layer1, Layer2, Layer3 } from "../../../assets"
import styles from "./ParallaxBoxes.module.scss"

const ParallaxBoxes: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, 60])

  const layer3Opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const layer2Opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const blueShades = [
    "#001f3f",
    "#003d5c",
    "#005a7a",
    "#007899",
    "#0096b8",
    "#1e90ff",
    "#4da6ff",
    "#7abdff",
    "#a8d4ff",
    "#c5e3ff",
    "#ddf0ff",
    "#e8f6ff",
  ]

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.parallaxLayers}>
        <motion.div
          style={{
            position: "absolute",
            y: layer3Y,
            opacity: layer3Opacity,
            backgroundImage: `url(${Layer3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "300px",
            height: "300px",
            top: "100px",
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            y: layer2Y,
            opacity: layer2Opacity,
            backgroundImage: `url(${Layer2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "300px",
            height: "300px",
            top: "150px",
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            y: layer1Y,
            backgroundImage: `url(${Layer1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "300px",
            height: "300px",
            top: "200px",
          }}
        />
      </div>

      <div className={styles.blueBoxesContainer}>
        {blueShades.map((color, index) => (
          <div key={index} style={{ background: color, flex: 1 }} />
        ))}
      </div>
    </div>
  )
}

export default ParallaxBoxes

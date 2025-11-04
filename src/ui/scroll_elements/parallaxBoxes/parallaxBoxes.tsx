
import React, { useEffect, useState } from "react"
import styles from "./ParallaxBoxes.module.scss"

interface ParallaxBoxesProps {
  baseColors?: [string, string, string] // Front, Middle, Back
}

const ParallaxBoxes: React.FC<ParallaxBoxesProps> = ({
  baseColors = ["#ff6347", "#32cd32", "#1e90ff"], // default red, green, blue
}) => {
  const [offsetY, setOffsetY] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Helper to lighten a hex color based on scroll
  const lightenColor = (hex: string, scrollFactor: number) => {
    const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max)

    // Convert hex to RGB
    const bigint = parseInt(hex.replace("#", ""), 16)
    let r = (bigint >> 16) & 255
    let g = (bigint >> 8) & 255
    let b = bigint & 255

    // Lighten by 0.1% per pixel scrolled
    r = clamp(r + scrollFactor * 0.2, 0, 255)
    g = clamp(g + scrollFactor * 0.2, 0, 255)
    b = clamp(b + scrollFactor * 0.2, 0, 255)

    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.box1}
        style={{
          transform: `translate(${100}px, ${offsetY * 0.6}px)`,
          backgroundColor: lightenColor(baseColors[2], offsetY),
        }}
      >
        Back Box
      </div>
      <div
        className={styles.box2}
        style={{
          transform: `translate(${50}px, ${offsetY * 0.4}px)`,
          backgroundColor: lightenColor(baseColors[1], offsetY),
        }}
      >
        Middle Box
      </div>
      <div
        className={styles.box3}
        style={{
          transform: `translate(0, ${offsetY * 0.2}px)`,
          backgroundColor: lightenColor(baseColors[0], offsetY),
        }}
      >
        Front Box
      </div>
    </div>
  )
}

export default ParallaxBoxes

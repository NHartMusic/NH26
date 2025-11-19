
import React, { useEffect, useState } from "react"
//assets
import {Layer1, Layer2, Layer3 } from '../../../assets'
//styles
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

  return (
    <div className={styles.container}>
      <div
        className={styles.box1}
        style={{
          transform: `translate(${100}px, ${offsetY * 0.6}px)`,
            backgroundImage: `url(${Layer3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
      />
    
      <div
        className={styles.box2}
        style={{
          transform: `translate(${50}px, ${offsetY * 0.4}px)`,
            backgroundImage: `url(${Layer2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
     />
      <div
        className={styles.box3}
        style={{
          transform: `translate(0, ${offsetY * 0.2}px)`,
            backgroundImage: `url(${Layer1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
     />
    </div>
  )
}

export default ParallaxBoxes

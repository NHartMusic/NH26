
import React, { useEffect, useState } from "react"
//assets
import {Layer1, Layer2, Layer3 } from '../../../assets'
//styles
import styles from "./ParallaxBoxes.module.scss"

interface ParallaxBoxesProps {
  baseColors?: [string, string, string] // Front, Middle, Back
}

const ParallaxBoxes: React.FC<ParallaxBoxesProps> = () => {
  const [offsetY, setOffsetY] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const blueShades = [
    '#001f3f', '#003d5c', '#005a7a', '#007899', '#0096b8',
    '#1e90ff', '#4da6ff', '#7abdff', '#a8d4ff', '#c5e3ff',
    '#ddf0ff', '#e8f6ff'
  ]

  return (
    <div className={styles.container}>
      <div className={styles.parallaxLayers}>
        <div
          style={{
            position: 'absolute',
            transform: `translate(${100}px, ${offsetY * 0.7}px)`,
            backgroundImage: `url(${Layer3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '300px',
            height: '300px',
            top: '100px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            transform: `translate(${50}px, ${offsetY * 0.4}px)`,
            backgroundImage: `url(${Layer2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '300px',
            height: '300px',
            top: '150px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            transform: `translate(0, ${offsetY * 0.1}px)`,
            backgroundImage: `url(${Layer1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '300px',
            height: '300px',
            top: '200px',
          }}
        />
      </div>
      <div className={styles.blueBoxesContainer}>
        {blueShades.map((color, index) => (
          <div
            key={index}
            style={{
              background: color,
              flex: 1,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ParallaxBoxes

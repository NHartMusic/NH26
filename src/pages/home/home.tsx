
//styles
import styles from './home.module.scss'
import { Glitch_Portrait_01 } from '../../assets/Portraits'
import { motion } from 'framer-motion'
//ui elements

const borderVariants = {
  initial: {
    strokeDashoffset: 1840,
  },
  animate: {
    strokeDashoffset: 0,
    transition: {
      duration: 2,
      ease: 'easeInOut' as const,
    },
  },
}

const borderVariants2 = {
  initial: {
    strokeDashoffset: 1920,
  },
  animate: {
    strokeDashoffset: 0,
    transition: {
      duration: 3,
      ease: 'easeInOut' as const,
    },
  },
}

const borderVariants3 = {
  initial: {
    strokeDashoffset: 1994,
  },
  animate: {
    strokeDashoffset: 0,
    transition: {
      duration: 3.5,
      ease: 'easeInOut' as const,
    },
  },
}

function Home() {

  return (
    <>
      <div>
        <div className={styles.home_container}>
          <h1 className={styles.home_title}>Nick Hart</h1>
          <div className={styles.portrait_container}>
            <svg
              className={styles.border_svg}
              viewBox="-20 -20 540 540"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
              }}
            >
              <motion.rect
                x="20"
                y="20"
                width="460"
                height="460"
                rx="230"
                ry="230"
                fill="none"
                stroke="blue"
                strokeWidth="4"
                strokeDasharray="1840"
                initial="initial"
                animate="animate"
                variants={borderVariants}
              />
              <motion.rect
                x="10"
                y="10"
                width="480"
                height="480"
                rx="240"
                ry="240"
                fill="none"
                stroke="#25dd7b"
                strokeWidth="4"
                strokeDasharray="1920"
                strokeDashoffset={1920}
                initial="initial"
                animate="animate"
                variants={borderVariants2}
                style={{
                  transformOrigin: '250px 250px',
                  transform: 'rotate(-90deg)'
                }}
              />

              <motion.rect
                x="0"
                y="0"
                width="500"
                height="500"
                rx="250"
                ry="250"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="2000"
                strokeDashoffset={2000}
                initial="initial"
                animate="animate"
                variants={borderVariants3}
                style={{
                  transformOrigin: '250px 250px',
                  transform: 'rotate(180deg)'
                }}
              />
            </svg>
            <img className={styles.home_portrait} src={Glitch_Portrait_01} alt="Glitch Portrait" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

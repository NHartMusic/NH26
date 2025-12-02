
//styles
import styles from './home.module.scss'
//ui elements
import { ParallaxBoxes } from '../../ui'

function Home() {

  return (
    <>
      <div className={styles.homeColumns}>
        <div className={styles.leftColumn}>
          <div className={styles.box1}>
            <p>Box 1</p>
          </div>
        </div>
        <div className={styles.centerColumn}>
          <ParallaxBoxes />
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.box2}>
            <p>Box 2</p>
          </div>
        </div>
      </div>
      <div className={styles.banner}>
        <p>Hello</p>
      </div>
    </>
  )
}

export default Home

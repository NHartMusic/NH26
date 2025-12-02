
//styles
import styles from './home.module.scss'
//ui elements
import { ParallaxBoxes } from '../../ui'

function Home() {

  return (
    <>
      <div className={styles.homeColumns}>
        <div className={styles.leftColumn}>

        </div>
        <div className={styles.centerColumn}>
          <ParallaxBoxes />
        </div>
        <div className={styles.rightColumn}>

        </div>
      </div>
    </>
  )
}

export default Home

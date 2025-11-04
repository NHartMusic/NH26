
//styles
import styles from './home.module.scss'
//ui elements
import { ParallaxBoxes } from '../../ui'

function Home() {

  return (
    <>
      <div>
        <h1 className={styles.title}>Home</h1>
        <div className={styles.parallax_container}>
          <ParallaxBoxes baseColors={["#ff00ff", "#00ffff", "#ffff00"]} />
        </div>
        <h1>Test</h1>
        <div>
          <ParallaxBoxes baseColors={["#ff00ff", "#00ffff", "#ffff00"]} />
        </div>
      </div>
    </>
  )
}

export default Home

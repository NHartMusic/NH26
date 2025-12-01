
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
          <ParallaxBoxes />
        </div>
        <div>
          <p>hello</p>
        </div>
      </div>
    </>
  )
}

export default Home


//styles
import styles from './home.module.scss'
//ui elements
import { ParallaxBoxes } from '../../ui'

function Home() {

  return (
    <>
      <div>
        <h1 className={styles.title}>Home</h1>
        <ParallaxBoxes />
      </div>
    </>
  )
}

export default Home


//styles
import styles from './home.module.scss'
import { Glitch_Portrait_01 } from '../../assets/Portraits'
//ui elements


function Home() {

  return (
    <>
      <div>
        <div className={styles.home_container}>
          <h1 className={styles.home_title}>Nick Hart</h1>
          <div className={styles.portrait_container}>
            <img className={styles.home_portrait} src={Glitch_Portrait_01} alt="Glitch Portrait" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

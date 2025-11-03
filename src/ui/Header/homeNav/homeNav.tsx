
//dependencies
import { Link } from 'react-router-dom'

//styles
import styles from './homeNav.module.scss'

function HomeNav() {

  return (
    <>
      <div className={styles.menu}>
        <Link to='/' className={styles.headerLink}>△</Link>
      </div>
    </>
  )
}

export default HomeNav

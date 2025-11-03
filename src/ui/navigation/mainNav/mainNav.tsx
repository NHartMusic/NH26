
//dependencies
import { Link } from 'react-router-dom'

//styles
import styles from './mainNav.module.scss'

function MainNav() {

  return (
    <>
      <div className={styles.menu}>
        <Link to='/' className={styles.headerLink}>Home</Link>
        <Link to='/portfolio' className={styles.headerLink}>Portfolio</Link>
      </div>
    </>
  )
}

export default MainNav

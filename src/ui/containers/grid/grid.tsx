import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../data/firebase'
import styles from './containers.module.scss'

type GridItem = {
  id: string
  title: string
}

function Grid() {
  const [items, setItems] = useState<GridItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadItems = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'gridItems'))

        const data: GridItem[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title ?? '',
        }))

        console.log('Loaded grid items:', data)

        setItems(data)
      } catch (err) {
        console.error(err)
        setError('Failed to load data from Firestore.')
      } finally {
        setLoading(false)
      }
    }

    void loadItems()
  }, [])

  if (loading) {
    return (
      <div className={styles.grid_container}>
        Loading...
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.grid_container}>
        {error}
      </div>
    )
  }

  return (
    <div className={styles.grid_container}>
      {items.map((item) => (
        <div
          key={item.id}
          className={styles.grid_content}
        >
          {item.title}
        </div>
      ))}
    </div>
  )
}

export default Grid

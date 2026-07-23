import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../data/firebase'
import styles from './containers.module.scss'

type GridItem = {
  id: string
  number: number
  title: string
  description: string
}

function Grid() {
  const [items, setItems] = useState<GridItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadItems = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'gridItems'))

        const data: GridItem[] = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            number: doc.data().number ?? 0,
            title: doc.data().title ?? '',
            description: doc.data().description ?? ''
          }))
          .sort((a, b) => a.number - b.number)

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
          <h3 className={styles.grid_content__title}>{item.title}</h3>
          <p className={styles.grid_content__description}>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Grid

import React from 'react'
import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
        <div className={styles.texts}></div>
        <div className={styles.sideImg}></div>
        </div>
    </div>
  )
}

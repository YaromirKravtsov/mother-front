import React, { FC, ReactNode } from 'react'
import styles from './PageLayout.module.css';
interface Props{
  title: string,
  children: ReactNode
}
const PageLayout:FC<Props> = ({title,children}) => {
  return (
    <div className={styles.page}>
      <div className={styles.topRow}>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.main}>
        {children}
      </div>
    </div>
  )
}

export default PageLayout

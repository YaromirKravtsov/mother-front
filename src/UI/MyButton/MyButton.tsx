import React, { FC, ReactNode } from 'react';
import styles from './MyButton.module.css'
interface Props{
    onClick: ()=> void,
    children: ReactNode
}
const MyButton:FC<Props> = ({children,onClick}) => {
  return (
    <>
      <button onClick={onClick} className={styles.button}>{children}</button>
    </>
  )
}

export default MyButton

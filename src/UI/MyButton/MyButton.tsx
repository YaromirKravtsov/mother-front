import React, { FC, ReactNode } from 'react';
import styles from './MyButton.module.css'
interface Props{
    onClick: ()=> void,
    children: ReactNode,
    className?: string
}
const MyButton:FC<Props> = ({children,onClick,className}) => {
  return (
    <>
      <button onClick={onClick} className={`${className} ${styles.button}`}>{children}</button>
    </>
  )
}

export default MyButton

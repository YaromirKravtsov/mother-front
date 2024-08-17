import React, { FC, ReactNode } from 'react'
interface Props{
    onClick: ()=> void,
    children: ReactNode
}
const MyButton:FC<Props> = ({children,onClick}) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  )
}

export default MyButton

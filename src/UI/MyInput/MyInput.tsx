import React, { FC } from 'react';
import styles from './MyInput.module.css';

interface Props{
    value: string,
    setValue: (value:string) => void
    className?:string,
    placeholder: string
}
const MyInput:FC<Props> = ({setValue,value,className,placeholder}) => {

    return (
        <div>
            <input 
            type="text" placeholder={placeholder}
             onChange={e => setValue(e.target.value)} value={value} 
             className={`${styles.input} ${className}`}/>
        </div>
    )
}

export default MyInput

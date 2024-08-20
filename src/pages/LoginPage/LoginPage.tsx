import React, { useState } from 'react'

import style from './LoginPage.module.css'
import MyButton from '../../UI/MyButton/MyButton'
import { useAuthStore } from '../../app/store/auth'
import MyInput from '../../UI/MyInput/MyInput'
const LoginPage = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const login = useAuthStore(state => state.login)
    return (
        <div className={style.main}>
          
            <MyInput value={username} setValue={setUsername} placeholder = "username"/>
            <MyInput value={password} setValue={setPassword} placeholder = "password"/>
            <MyButton onClick={()=>login(username,password)}>
                Login
            </MyButton>
            
        </div>
    )
}

export default LoginPage

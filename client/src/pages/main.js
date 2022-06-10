import React, {useState, useEffect} from 'react'

import { token } from '../utils/spotify'
import '../assets/styles.css'

import { Login } from '../components/Login'
import { Dashboard } from '../components/Dashboard'
// 
const hash = window.location.hash.substring(1)
// console.log(hash)


  
export const Main= () => {

    const [accessToken, setToken] = useState('');
    // console.log(token)

    useEffect(() => {
        setToken(token)
        
    }, []);

    return (
        accessToken ? <Dashboard/> : <Login/>
        // <Login/>
    )
}
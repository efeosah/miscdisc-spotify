import React, {useState, useEffect} from 'react'


import '../assets/styles.css'

import { Login } from '../components/Login'
import { Dashboard } from '../components/Dashboard'

const hash = window.location.hash.substring(1)
console.log(hash)


  
export const Main= () => {

    // const [hash, setHash] = useState("");

    return (
        hash ? <Dashboard/> : <Login/>
        // <Login/>
    )
}
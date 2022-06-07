import React, {useState, useEffect} from 'react'


import '../assets/styles.css'

import { Login } from '../components/Login'
import { Dashboard } from '../components/Dashboard'

const hash = window.location.hash


export const Main= () => {

    // const [hash, setHash] = useState("");

    useEffect(() => {
        // setHash(window.location.hash)
        if(hash){
            const token = hash.substring(1).split("&")[0].split("=")
            console.log(token)

        }
    }, []);
    return (
        hash ? <Dashboard hash = {hash}/> : <Login/>
    )
}
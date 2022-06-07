import React, {useState, useEffect} from 'react';
import axios from 'axios'


export const useAuth = (hash) => {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios.get('http://localhost:8888/login')
        .then(console.log("works"))
        .catch(error => console.error(error))
        
        
    }, [hash]);
}


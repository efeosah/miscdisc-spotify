import React from 'react'



export const Login = () => {

    const handleClick = () => {
        const redirectURL = 'http://localhost:3000/'
        const apiURL = 'https://accounts.spotify.com/authorize'
        const clientID = "57515d767157492fae19d3f342d53fcc"
        
        const scopes = [
            "user-read-email",
            "user-read-private",
            "user-library-modify",
            "user-library-read",
            " user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-read-playback-position",
            "user-top-read"
        ]

        // window.location.href = `${apiURL}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scopes.join(" ")
        // }&response_type=token&show_dialog=true` 
        window.location.href = 'http://localhost:8888/login'
    }


    return (

        <>
            <button onClick={handleClick}>Login to Spotify</button>
        </>
    )
}
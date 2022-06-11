import React from 'react'

import styled, { keyframes } from 'styled-components'

const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://miscdisc.herokuapp.com/login';

const gradient = keyframes`
{
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }}
`;

const Container = styled.div`
    display : flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height: 100vh;
    width : 100wh;
    animation: ${gradient} 5s ease-in-out infinite;
    background: linear-gradient(90deg, #1DB954, #191414);
    background-size: 300%;
    background-clip: text;
    gap:5rem;
    img{
        height : 20vh;
    }
    button{
        padding : 1rem 5rem;
        border-radius : 5rem;
        border:none;
        background-color : black;
        color : white;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
        sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-feature-settings: "kern";
        font-size : 1.4rem;
        --webkit-text-fill-color: white;
        
    }
`

export const Login = () => {

    const handleClick = () => {
        console.log(process.env.NODE_ENV)
        window.location.href = 'https://miscdisc.herokuapp.com/login'
    }


    return (

        <Container>
            <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt='Spotify Logo'></img>
            <button onClick={handleClick}>Login</button>
        </Container>
    )
}
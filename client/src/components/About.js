import React from 'react'
import styled from 'styled-components'


//import spotify API calls
import { getUser, token } from '../utils/spotify'

const Container = styled.div`

    display : grid;
    color : black;
    height : 100%;
    width : 100%;
    flex-direction : column;

    grid-template-columns : 99% 1%;

    background : linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color : rgb(32, 87, 100);
    .content{
        // background-color : #1DB954;
    }
    .line{
        background-color: white;
        margin-top: 5rem 
    }
    
`


export const About = () => {

    const user = getUser().then(res => res.json()).then(data => console.log(data));
    console.log(user)
    return <Container>

        <div className='content'></div>
        <div className='line'></div>
    </Container>
}
import React from 'react'
import styled from 'styled-components'

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
    
    

`


export const NowPlaying = () => {

    return (
        <>
            <Container>
                Now Playing Ham

            </Container>
        </>
    )
}
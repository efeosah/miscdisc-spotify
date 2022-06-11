import React from 'react'
import styled from 'styled-components'


const Container = styled.div`

    width : inherit;
    height : 100%;

    // background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
    overflow: hidden;

    display : grid;
    grid-template-rows : 83% 17%;

    &:hover{
        opacity : 0.55;

    }



`

const ImageContainer = styled.div`

    // height : 90%;    
    img{
        width : 100%;
        height : 100%;

        object-fit: cover;
    }



`

const TextContainer = styled.div`

    position : relative;
    color : white;
    // height : 100%;

    // padding-top : 5px;

    font-weight: bold;
    
    z-index: 2;
    // text-align: center;
    // align-items : center;
    

    .text{
        display : inline;
        height : 100%;
        width : 100%;
        position : absolute;
        margin :auto;
        font-size : 14px;
        text-align: center;
        align-items : center;
        justify-items : center;
        
        top : 0;
        left : 0;
        right : 0;
        bottom : 0;
        
    }
   
`

const TextBackground = styled.div`


    height : 100%;
    width : 100%;


    // display : flex;
    // flex-direction : column;
    justify-content : center;
    background-image : linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.623)), url(${(props) => props.img});
    filter: saturate(3) brightness(5) blur(3rem);
    
    

    // -webkit-filter: blur(2rem);
    z-index : -1;
    
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position : absolute;
    top: 0;
    left: 0;
    right : 0;
    down : 0;

    
`


export const Card = ({ data }) => { 


    return (

        <>

            <Container>

                <ImageContainer>
                    <img alt='card img' src={data.images[0].url}>
                    </img>

                </ImageContainer>

                <TextContainer >
                    <div className='text'>{data.name}</div>
                    <TextBackground img={data.images[0].url}></TextBackground>
                </TextContainer>
            </Container>

        </>
    )
}
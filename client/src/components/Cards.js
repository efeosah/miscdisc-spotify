import React from 'react'
import styled from 'styled-components'


const Container = styled.div`

    width : inherit;
    height : 100%;

    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;

    display : grid;
    grid-template-rows : 80% 20%;

    &:hover{
        opaque : 0.3;
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
    color: black;
    font-weight: bold;
    // border: 3px solid #f1f1f1;
    
    // transform: translate(-50%, -50%);
    z-index: 2;
    // width: 80%;
    // padding: 20px;
    text-align: center;

    // .text{
    //     // background-color: rgb(0,0,0); /* Fallback color */
    //     // background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
    //     color: white;
    //     filter: blur(0);
    //     -webkit-filter: blur(0);
    //     font-weight: bold;
    //     // border: 3px solid #f1f1f1;
    //     // position: absolute;
    //     // top: 50%;
    //     // left: 50%;
    //     // transform: translate(-50%, -50%);
    //     z-index: 2;
    //     // width: 80%;
    //     // padding: 20px;
    //     text-align: center;
    // }
`

const TextBackground = styled.div`


    height : 100%;

    display : flex;
    flex-direction : column;
    justify-content : center;
    background-image : url(${(props) => props.img});
    filter: blur(3rem);

    -webkit-filter: blur(2.5rem);
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
                    <div>{data.name}</div>
                    <TextBackground img={data.images[0].url}></TextBackground>
                </TextContainer>
            </Container>

        </>
    )
}
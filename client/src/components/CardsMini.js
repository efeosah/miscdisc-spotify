import React from 'react'
import styled from 'styled-components'

import { FiPlayCircle } from 'react-icons/fi'
import { TbDotsCircleHorizontal } from 'react-icons/tb'

import { HiDotsCircleHorizontal } from 'react-icons/hi'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoPlay, IoEllipsisHorizontal } from 'react-icons/io5'


const Container = styled.div`

    width : inherit;
    height : 100%;

    // background-color: #fff;

    display : grid;
    grid-template-rows : 80% 20%;

    
`

const ImageContainer = styled.div`

    border-radius: 10px;
    position : relative;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;

    // height : 90%;    
    img{
        position : absolute;
        top : 0;
        left : 0;
        width : 100%;
        height : 100%;

        object-fit: cover;

        

    }
    

    &:hover{
        opacity : 0.7;
        cursor : pointer;
    }

    .icons{
        display : inline-grid;
        grid-template-columns: repeat(2, 1fr);
        width : 100%;
        height : 100%;
        font-size: 2.2rem;
        color : white;
        position : relative;
        z-index : 10;
        // visibility: hidden;
        opacity : 0;
        // display : none;

        .right{
            border-radius:100%;
            // background-color : grey;
            display : inline-flex;
            position : absolute;
            right : 0;
            bottom : 0;
            &:hover{
                color : #1DB954;
            }
        }
        .left{
            border-radius:100%;
            // border-width:thin;
            // background-color : black;
            // align-items : center;
            display : inline-flex;
            left : 0;
            position : absolute;
            bottom : 0;
            &:hover{
                color : #1DB954;
            }
        }

        &:hover{
            opacity : 1;
            color : white;
        }

    }

    

`

const TextContainer = styled.div`

    position : relative;
    color: white;
    font-weight: bold;
    // border: 3px solid #f1f1f1;
    
    // transform: translate(-50%, -50%);
    z-index: 2;
    // width: 80%;
    // padding: 20px;
    text-align: left;



    .upper{
        margin-top : 2px;

        &:hover{
            text-decoration : underline;
            cursor : pointer;
        }
    }

    .lower{
        color : grey;
        font-size : 15px;

        &:hover{
            text-decoration : underline;
            cursor : pointer;
            

        }
    }

    
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


export const CardMini = ({ data }) => { 


    return (

        <>

            <Container>

                <ImageContainer>
                    <div className='icons'>
                        <IoPlay className='left'/>
                        <IoEllipsisHorizontal className='right'/>
                    </div>
                    <img alt='card img' src={data.track.album.images[0].url}>
                    </img>

                </ImageContainer>

                <TextContainer >
                    <div className='upper'>{data.track.album.name}</div>
                    <div className='lower'>{data.track.album.artists[0].name}</div>
                    {/* <TextBackground img={data.images[0].url}></TextBackground> */}
                </TextContainer>
            </Container>

        </>
    )
}
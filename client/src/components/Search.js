import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {FiSearch} from 'react-icons/fi'

import { search } from '../utils/spotify'


const Container = styled.div`

    display : grid;
    color : black;
    height : 100%;
    width : 100%;
    flex-direction : column;

    background : linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color : rgb(32, 87, 100);

    grid-template-columns : 99% 1%;
    .content{
        // background-color : black;
    }
    .line{
        background-color: white;
        margin-top: 5rem 
    }

`

const Form = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #37474f;
    margin-top: 1.5rem;
    width: 80%;
    margin:auto;
    margin-top : 1.5rem;
    cursor: auto;
    padding: 1rem;
    height: 1rem;
    border-radius : 5rem;
    

`

const Input = styled.input`
    font-size: 14px;
    line-height: 1;
    background-color: transparent;
    width: 100%;
    margin-left: 0.5rem;
    border: none;
    color: #1DB954;
    &:focus,
    &:active {
        outline: none;
    }
    &::placeholder {
        color: #1DB954;
    }
`

const Button = styled.button`
    line-height: 1;
    pointer-events: auto;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    color: black;
`

const Result = styled.div`
    color : white;
    margin : 1.5rem 0rem;
    text-align: center;
    
    height : 3rem;
    width : 100%;

    ul{
        list-style-type : none;
        display : flex;
        flex-direction : column;
        gap : 1.5rem;


        li{

        }
    }


`

export const Search = () => {

    const [input, setInput] = useState("");
    const [queryRes, setRes] = useState({})

    const onSubmit = (e) => {

        e.preventDefault()
        search(input)
        .then(res => res.json())
        .then(data => setRes(data))

    }

    useEffect(() => {
        console.log(queryRes)
        
    }, [queryRes]);

    return (
        <Container>
                <div className='content'>
                    <Form 
                        onSubmit={(e) => onSubmit(e)}>

                        <Button>
                            <FiSearch/>
                        </Button>
                        <Input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            placeholder='Artist, Songs, and More'>

                        </Input>
                        
                    </Form>
                    <Result>
                        <ul>
                            {queryRes.length === 0 ? " " : Object.keys(queryRes).map((item) => console.log(queryRes[item]))}
                        </ul>
                    </Result>
                </div>
                <div className='line'></div>
        </Container>
        
    )
}
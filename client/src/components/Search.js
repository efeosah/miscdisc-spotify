import React, {useState} from 'react'
import styled from 'styled-components'
import {FiSearch} from 'react-icons/fi'

import { search } from '../utils/spotify'


const Container = styled.div`

    display : grid;
    color : black;
    height : 100%;
    width : 100%;
    flex-direction : column;

    grid-template-columns : 98% 2%;
    .content{
        background-color : black;
    }
    .line{
        background-color: white;
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

export const Search = () => {

    const [input, setInput] = useState("initialState");
    return (
        <Container>
                <div className='content'>
                    <Form>

                        <Button>
                            <FiSearch/>
                        </Button>
                        <Input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        placeholder='Artist, Songs, and More'>

                        </Input>
                        
                    </Form>
                </div>
                <div className='line'></div>
        </Container>
        
    )
}
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {FiSearch, FiArrowRight} from 'react-icons/fi'

import { search } from '../utils/spotify'

const capitalize = (word) => {

    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
const Container = styled.div`

    display : grid;
    color : black;
    height : 100%;
    width : 100%;
    margin-left : auto;
    margin-right : auto;
    align-items : center;

    // flex-direction : column;

    // background : linear-gradient(transparent, rgba(0, 0, 0, 1));
    // background-color : rgb(32, 87, 100);


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
    // margin-top : 0.5rem;
    cursor: auto;
    padding: 1rem;
    height: 1rem;
    border-radius : 2rem;
    

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
    color : #1DB954;
    margin : 3rem 0rem;
    text-align: center;
    
    height : 100%;
    width : 100%;

    ul{
        list-style-type : none;
        display : grid;
        // flex-direction : column;
        // gap : 1.5rem;
        padding : 0;

        .active{
            color : white;
        }


        li{
            height : 3.5rem;
            padding : 12px;
            text-align : left;
            align-items : center;
            box-sizing : border-box;
            display: grid;
            grid-template-columns: 10fr 1fr;
            // background-color: lightblue;
            font-size: 13px;
            gap: 10px;
            border: 1px solid transparent;
            cursor: pointer;


            //  Icon forward //
            // display: inline-block;
            // vertical-align: middle;
            // -webkit-transform: perspective(1px) translateZ(0);
            // transform: perspective(1px) translateZ(0);
            // box-shadow: 0 0 1px rgba(0, 0, 0, 0);
            // -webkit-transition-duration: 0.1s;
            // transition-duration: 0.1s;

            //  Box shadow inset //
            // display: inline-block;
            vertical-align: middle;
            -webkit-transform: perspective(1px) translateZ(0);
            transform: perspective(1px) translateZ(0);
            box-shadow: 0 0 1px rgba(0, 0, 0, 0);
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: box-shadow;
            transition-property: box-shadow;
            box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0);


            // //
            vertical-align: middle;
            -webkit-transform: perspective(1px) translateZ(0);
            transform: perspective(1px) translateZ(0);
            box-shadow: 0 0 1px rgba(0, 0, 0, 0);
            position: relative;

            &:before,
            &:after{
                pointer-events: none;
                position: absolute;
                content: '';
                left: 0;
                width: 100%;
                box-sizing: border-box;
                background-repeat: no-repeat;
                height: 5px;
                opacity: 0;
                -webkit-transition-duration: 0.3s;
                transition-duration: 0.3s;
                -webkit-transition-property: opacity;
                transition-property: opacity;
            }

            &:before{
                bottom: 100%;
                background: -webkit-radial-gradient(50% 150%, ellipse, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);
                background: radial-gradient(ellipse at 50% 150%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);
            }

            &:after{
                top: 100%;
                background: -webkit-radial-gradient(50% -50%, ellipse, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);
                background: radial-gradient(ellipse at 50% -50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);
            }
            &:hover:before,
            &:hover:after,
            &:focus:before,
            &:focus:after,
            &:active:before,
            &:active:after
            {
                // border: 1px solid;
                // color : white;

                //01
                // -webkit-transform: translateX(4px);
                // transform: translateX(4px);


                //02
                // box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0); 
                

                //03
                opacity: 1;
            
            }

            

            #arrow{
                color : green;
                item-align : center;
                padding : auto;
                margin : auto;
                text-align : center;



                // &:hover{
                //     color : white;
                // }
            }
        }
        
    }


`

export const Search = () => {

    const [input, setInput] = useState("");
    const [queryRes, setRes] = useState({})
    const [active, setActive] = useState()

    const onSubmit = (e) => {

        e.preventDefault()
        search(input)
        .then(res => res.json())
        .then(data => setRes(data))

    }

    const onResClick = (index) => {

        if(index === active){
            setActive()
        }
        else{
            setActive(index)
        }
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
                        <Input spellCheck='false'
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            placeholder='Artist, Songs, and More'>

                        </Input>
                        
                    </Form>
                    {/* <Result>
                        <ul>
                            {queryRes.length === 0 ? " " : Object.keys(queryRes).map((item, index) => {
                                return (
                                // console.log(queryRes[item])

                                    <li 
                                    key={index} 
                                    className={index === active ? "active" : ""} 
                                    onClick={() => onResClick(index)}>
                                        <span>{capitalize(item)}</span>
                                        {/* <FiArrowRight id='arrow'/> 
                                    </li>
                                )
                            })}
                        </ul>
                    </Result> */}
                </div>
                {/* <div className='line'></div> */}
        </Container>
        
    )
}
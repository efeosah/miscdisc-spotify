import React from "react";
import styled from "styled-components";

import {
    IoShuffle,
    IoRepeat,
    IoPlayForward,
    IoPlay,
    IoPlayBack,
    IoPauseSharp,
} from "react-icons/io5";

import { FaSpotify } from 'react-icons/fa'

const Container = styled.div`

    display : grid;
    grid-template-columns : 1fr 1.5fr 1fr;
    grid-gap : 10px;

    height : 100%;
    width : 97%;
    margin-left : auto;
    margin-right : auto;
    align-items : center;
    padding : 5px 16px;

    // grid-template-columns : repeat(3, 1fr);

    


`;

const Controls = styled.div`
    flex-grow: 1;

    display: inline-grid;
    grid-template-columns: 1fr auto 1fr;
    justify-items: center;
    align-items: center;


    .controlgroup {
        display : inline-grid;
        grid-template-columns : 1fr auto 1fr;
        margin : 0 0.7rem;
        // align-items : center;

    }

    
`;

const ControlsWrapper = styled.div`
    text-align: center;
    align-items : center;
`;

const ControlButtons = styled.button`
    height : inherit;
    appearance: none;
    border: 0;
    background: transparent;
    padding: 0;
    margin : 5px;
    color : grey;


    .side{
        width : 1.5rem;
        height : inherit;
        opacity : 0.7;
    }

    .play{
        
        // font-size : 30px;
        height: inherit;
        width : 2.2rem;
    }

    .innerside{
        height : inherit;
        width : 1.7rem;
    }

    svg{

        &:hover{

            color : white;
            fill : white;
            cursor : pointer;
        }

    }
    
`;

const LCD = styled.div`
    flex-grow: 2;
    position: relative;
    height: 44px;
    // border: 0.5px solid #dedede;
    border-radius: 3px;
    overflow: hidden;
    text-align: center;
    /* Flexbox for centering the SVG */
    display: flex;
    justify-content: center;
    align-items: center;

    &:before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 44px;
        height: 44px;
        background: url('...') center/100% no-repeat;
    }
`;

const Slider = styled.div`

`

const User = styled.div`
    flex-grow: 1;
`;

export const MH = () => {
    return (
        <>
            <Container>
                <ControlsWrapper>
                    <Controls>
                        <ControlButtons>
                            <IoShuffle className="side"/>
                        </ControlButtons>

                        <div className="controlgroup">
                            <ControlButtons>
                                <IoPlayBack className="innerside"/>
                            </ControlButtons>

                            <ControlButtons>
                                <IoPlay className="play"/>
                            </ControlButtons>

                            <ControlButtons>
                                <IoPlayForward className="innerside"/>
                            </ControlButtons>
                        </div>

                        <ControlButtons >
                            <IoRepeat className="side"/>
                        </ControlButtons>
                    </Controls>
                </ControlsWrapper>
                <LCD><FaSpotify/></LCD>

                <User>User</User>
            </Container>
        </>
    );
};

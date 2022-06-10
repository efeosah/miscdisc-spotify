import React from "react";
import styled from "styled-components";

import { Search } from "./Search";

const Container = styled.div`
    positon : relative; 
    display: grid;
    color: black;
    height: 100%;
    width: 100%;
    // overflow : hidden;
    padding: auto;
    // flex-direction : column;
    // padding-right : 3rem;
    // padding-bottom : 25rem;
    // margin-right : 0.5rem;
    // flex-direction : column;

    // grid-template-column : 100%;
    // grid-template-rows : 20vh 80vh;

    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
`;

const Body = styled.div`
    width: 99%;
    height: 100%;
    margin: auto;
    // background-color : black;
    // opacity : 0;
    padding: 0.5rem;

    align-item: center;
    text-align: center;

    display: grid;
    grid-template-rows: 20fr 80fr;

    .header {
        display: grid;
        grid-template-columns: 25fr 75fr;
    }
`;

export const Content = ({ Cont }) => {
    return (
        <>
            <Container>
                <Body>
                    {/* TODO */}
                    <div className="header">
                        <Search />
                    </div>

                    {/* NOW PLAYING */}
                    <Cont />

                </Body>

            </Container>
        </>
    );
};

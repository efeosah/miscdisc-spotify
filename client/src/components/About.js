import React from "react";
import styled from "styled-components";

//import spotify API calls
import { getUser, token } from "../utils/spotify";

const Container = styled.div`
    position : relative;
    display: inline-block;
    color: black;
    height: 100%;
    width: 100%;
`;

const Title = styled.div`
    position : relative;
    display: grid;
    grid-template-columns: 50fr 50fr;
    margin: auto;
    color: white;
    width: 97%;
    height: 5rem;
    border-bottom: 1px solid grey;

    .text{
        // text-align : left;
        position : absolute;
        display : inline-flex;
        font-size : 30px;
        // align-items : flex-end;
        bottom : 0;
        left : 0;
        // width : 50%;
        // height : 100%;
    }
`;

const Image = styled.div`

    display : inline-flex;
    position : absolute;
    text-align : right;
    margin-bottom : 1rem;
    bottom : 0;
    right : 0;
    // align-items : flex-end;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    background: grey;
`;

export const About = () => {
    const user = getUser()
        .then((res) => res.json())
        .then((data) => console.log(data));
    console.log(user);
    return (
        <>
            <Container>

                <Title>
                    <div className="text">Title</div>

                    {/* TITLE */}

                    {/* IMAGE */}
                    <Image></Image>
                </Title>
            </Container>
        </>
    );
};

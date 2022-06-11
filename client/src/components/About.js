import React, { useState, useEffect } from "react";
import styled from "styled-components";

//import spotify API calls
import {
    getUser,
    token,
    getFeatured,
    getRecentlyPlayed,
} from "../utils/spotify";
import { Card } from "./Cards";
import { CardMini } from "./CardsMini";

const Container = styled.div`
    position: relative;
    display: inline-block;
    // grid-template-rows: 1fr 1fr 1fr;
    color: white;
    height: 100%;
    width: 100%;
    overflow: auto;
`;

const BigUlContain = styled.div`
    ul {
        margin: 1rem auto;
        margin-top: 0.5rem;
        width: 97%;
        height: 400px;
        display: grid;
        gap: 1rem;
        list-style-type: none;
        align-items: center;
        grid-template-columns: repeat(4, 1fr);

        li {
            height: inherit;

            &:hover {
                opacity: 0.8;
            }
        }
    }
`;

const SmallUlContain = styled.div`
    ul {
        margin: 1rem auto;
        margin-top: 0.5rem;
        width: 97%;
        height: 320px;
        display: grid;
        gap: 1rem;
        list-style-type: none;
        align-items: center;
        grid-template-columns: repeat(5, 1fr);

        li {
            height: inherit;

            // &:hover {
            //     opacity: 0.8;
            //     color: green;
            // }
        }
    }
`;

const Title = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 50fr 50fr;
    margin: auto;
    color: white;
    width: 97%;
    height: 5rem;
    border-bottom: 1px solid grey;

    .text {
        // text-align : left;
        position: absolute;
        display: inline-flex;
        font-size: 30px;
        // align-items : flex-end;
        bottom: 0;
        left: 0;
        // width : 50%;
        // height : 100%;
    }
`;

const Image = styled.div`
    display: inline-flex;
    position: absolute;
    text-align: right;
    margin-bottom: 1rem;
    bottom: 0;
    right: 0;
    // align-items : flex-end;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    background: grey;
    background: url(${(props) => props.image});
    background-position: 50% 50%;
    background-size: cover;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
        // border : 1px grey;
    }

    // img{
    //     border-radius : 100%;
    // }
`;

const Space = styled.span`
    border-bottom: 1px solid grey;
`;

const Info = styled.div`
    display: inline-grid;
    position: relative;
    margin-top: 1rem;

    grid-template-columns: repeat(2, 1fr);
    width: 97%;

    .left {
        display: inline-flex;
        // position : absolute;
        left: 0;
        bottom: 0;
    }
    .right {
        display: inline-flex;
        position: absolute;
        right: 0;
        bottom: 0;

        a {
            color: #1db954;

            &:active,
            &:visited,
            &:link {
                text-decoration: none;
            }

            &:hover {
                color: #c0c0c0;
            }
        }
    }
`;

// const FeaturePanel = styled.div`

//     height: 350px;
//     width : 97%;
//     display : inline-grid;
//     margin : auto;
//     h4{
//         text-align : left;
//     }
//     ul{
//         width : inherit;
//         height : 300px;
//         display:grid;
//         gap : 1rem;
//         list-style-type : none;
//         align-items : center;

//         // margin : auto;
//         // grid-auto-flow : column;
//         grid-template-columns: repeat(5, 1fr);

//         li{
//             display : flex;
//             flex-direction : column;
//             width : inherit;
//             align-items : center;
//             border-radius : 10%;

//             &:hover{
//                 opaque: 0.3;
//             }

//             .contentBox1{
//                 width : inherit;
//                 height : 300px;
//                 align-items : center;

//                 img{
//                     height : inherit;
//                     width : inherit;
//                     object-fit: contain;
//                 }

//             }

//         }
//     }

// `

export const About = () => {
    const [featured, setFeatured] = useState(null);
    const [user, setUser] = useState(null);
    const [recently, setRecently] = useState(null);

    useEffect(() => {
        getRecentlyPlayed()
            .then((res) => res.json())
            .then((data) => setRecently(data));
    }, []);

    useEffect(() => {
        getUser()
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, []);

    useEffect(() => {
        getFeatured()
            .then((res) => res.json())
            .then((data) => setFeatured(data));
    }, []);

    const handleUserClick = () => {};

    return (
        <>
            {user && (
                <Container>

                    {featured && (
                        <>
                            <Title>
                                <div className="text">Listen Now</div>

                                {/* TITLE */}

                                {/* IMAGE */}
                                <Image image={user.images[0].url}>
                                    {/* <img src={user.images.length > 0 ? user.images[0].url : ""} alt=''></img> */}
                                </Image>
                            </Title>

                            <Info>
                                <div className="left">{featured.message}</div>

                                <div className="right">
                                    <a href="/">See more</a>
                                </div>
                            </Info>
                            <BigUlContain>
                                <ul>
                                    {featured.playlists.items
                                        .slice(0, 4)
                                        .map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Card data={item} />
                                                </li>
                                            );
                                        })}
                                </ul>
                            </BigUlContain>
                        </>
                    )}

                    

                    

                    {recently && (
                        <>
                            <Info>
                                <div className="left">Recently Played</div>

                                <div className="right">
                                    <a href="/">See more</a>
                                </div>
                            </Info>

                            <SmallUlContain>
                                <ul>
                                    {recently.items
                                        .slice(0, 5)
                                        .map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <CardMini data={item} />
                                                </li>
                                            );
                                        })}
                                </ul>
                            </SmallUlContain>
                        </>
                    )}

                    {/* <Info>

                    </Info> */}
                    
                </Container>
            )}
        </>
    );
};

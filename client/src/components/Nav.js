import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { FiPlay, FiUser, FiUsers, FiSearch, FiCodesandbox } from 'react-icons/fi'



//logo imports



const Container = styled.div`


    background : #191414;
    color : white;
    display : flex;
    flex-direction : column;
    height : 100%;
    width : 100%;
    .navLinks{
        display : flex;
        flex-direction : flex;
        align-items : center;
        margin : auto;
        margin-top : 2rem;


        ul{
            list-style-type : none;
            display : flex;
            flex-direction : column;
            gap : 1.5rem;

            li{
                color : #1DB954;
                display : flex;
                // cursor : pointer;
                font-size : 2.2rem;
                transition : 0.3 ease-in-out;
                margin : 0.5rem 0;
                &:hover{
                    color:white;

                }
                
            }
            .selected{
                color:white;
            }

        }

    }
    
`






export const Nav = ({curHam, updateHam, Comp}) => {

    const [active, setActive] = useState("");

    const handleClick = (comp) => {

        if(!(curHam && comp !== "")){
            updateHam(!curHam)
        }
        
        setActive(comp)
        if(comp !== ""){
            Comp(comp)
        }
    }

    
    
    const icons = [
    
        {favicon : <FiUser/>,  className : active === "about" ? 'selected' : '',comp : "about", onClick : (type) => handleClick(type)},
        {favicon : <FiSearch/>, className : active === "search" ? 'selected' : '', comp : "search", onClick : (type) => handleClick(type)},
        {favicon : <FiPlay/>, className : active === "play" ? 'selected' : '', comp : "play", onClick : (type) => handleClick(type)},
        {favicon : <FiUsers/>, className : active === "friends" ? 'selected' : '', comp : "friends", onClick : (type) => handleClick(type)},
        {favicon : <FiCodesandbox/>, className : active === "recommended" ? 'selected' : '', comp : "recommended", onClick : (type) => handleClick(type)},
    
    ]


    return (
        <Container>

            <div className="navLinks">

                <ul>

                    {icons.map(((icon, index) => {
                        return (
                            <li key={index} className={icon.className} onClick={() => icon.onClick(active === icon.comp? "":icon.comp)}>
                            {icon.favicon}
                            </li>
                        )
                    }))}

                </ul>
            </div>

        </Container>
    )
}
    
    
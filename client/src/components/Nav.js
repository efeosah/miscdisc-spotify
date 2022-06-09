import React, {useState} from "react";
import styled from "styled-components";
import { FiPlay, FiUser, FiUsers, FiSearch, FiCodesandbox } from 'react-icons/fi'



//logo imports



const Container = styled.div`


    background : black;
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

                display : flex;
                // cursor : pointer;
                font-size : 2.2rem;
                transition : 0.3 ease-in-out;
                margin : 0.5rem 0;
                &:hover{
                    color:green;

                }
            }

        }

    }
    
`






export const Nav = ({curHam, updateHam}) => {

    const [active, setActive] = useState("");

    // const update  = updateHam
    console.log(updateHam)
    console.log(curHam)
    // console.log(props)

    const handleClick = () => {

        console.log("clicked");
        updateHam(!curHam)
    
    }
    
    const icons = [
    
        {favicon : <FiUser/>, className : "", onClick : () => handleClick()},
        {favicon : <FiSearch/>, className : "", onClick : () => handleClick()},
        {favicon : <FiPlay/>, className : "", onClick : () => handleClick()},
        {favicon : <FiUsers/>, className : "", onClick : () => handleClick()},
        {favicon : <FiCodesandbox/>, className : "", onClick : () => handleClick()},
    
    ]

    return (
        <Container>

            <div className="navLinks">

                <ul>

                    {icons.map(((icon, index) => {
                        return (
                            <li key={index}className={icon.className} onClick={() => icon.onClick()}>
                            {icon.favicon}
                            </li>
                        )
                    }))}

                </ul>
            </div>

        </Container>
    )
}
    
    
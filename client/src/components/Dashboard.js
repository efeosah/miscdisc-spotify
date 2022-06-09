import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import { Nav } from './Nav'
import { Footer } from './Footer'
import { Ham } from './Hamburger'
import { Content } from './Content'

const contentSize = "4vw 96vw";
const hamContentSize = "4vw 21vw 75vw";


const Container = styled.div`

        // background : black;
        max-width : 100vw;
        max-height : 100vh;
        display : grid;
        overflow : hidden;
        grid-template-rows : 95vh 5vh;


        .body{
            display:grid;
            grid-template-columns : ${(props) => (props.ham ? hamContentSize : contentSize)};


        }
    `

const collapsibleHam = (state) => {

    if(state){
        return (<div className="hamburger">
                <Ham />
                </div>
            )
    }
}




export const Dashboard = () => {

    const [useHam, setUseHam] = useState(false);

    

    return (
        <Container ham={useHam}>
            <div className="body">
                <Nav curHam={useHam} updateHam={(bool) => setUseHam(bool)}/>
                
                {/* {useHam && <div className="hamburger">
                    <Ham />
                </div>} */}

                {collapsibleHam(useHam)}

                <div className='content'>
                    <Content/>
                </div>

            </div>
            <div className='footer'>
                <Footer/>
            </div>



        </Container>
    )

}
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import { Nav } from './Nav'
import { Footer } from './Footer'
import { Ham } from './Hamburger'
import { Content } from './Content'

//ham components
import { About } from './About'
import { Search } from './Search'
import { Recommended } from './Recommended'
import { Friends } from './Friends'
import { NowPlaying } from './NowPlaying'

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
            // background-color: green;
            

        }
    `



const hamComponents = {
    'about' : About,
    'search' : Search,
    'friends' : Friends,
    'play' : NowPlaying,
    'recommended' : Recommended

}




export const Dashboard = () => {

    const [useHam, setUseHam] = useState(false);
    const [hamComp, setHamComp] = useState('about')

    

    const collapsibleHam = (state) => {

        if(state){
            return (<div className="hamburger">
                    <Ham Comp={hamComponents[hamComp]}/>
                    </div>
                )
        }
    }
    

    return (
        <Container ham={useHam}>
            <div className="body">
                <Nav curHam={useHam} updateHam={(bool) => setUseHam(bool)} Comp={(comp) => setHamComp(comp)}/>
                
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
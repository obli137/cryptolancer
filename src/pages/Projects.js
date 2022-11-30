import React from 'react'
import styled from 'styled-components'
import Deck from '../components/Deck'
//import Slider from '../components/Slider/Slider'


function Projects() {
    return (
            <ProjectsWrapper name="projects" id="projects">
                <ProjectsBlock>
                    <PageMainSub>Academy</PageMainSub>
                    <PageMainContent>Stay tunned for our upcoming community academy.</PageMainContent>
                </ProjectsBlock>
                <Deck/>
            </ProjectsWrapper>
    )
}

export default Projects


// ESTILADO
const ProjectsWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    @media (max-width: 1023px) {
        height: 100vh;
    }
`;

const ProjectsBlock = styled.div`
    z-index: 1;
    width: 90vw;
    left: 5vw;
    position: absolute;
    top: 27%;
    @media (max-width: 1023px) {
        padding: 0;
        width: 90%;
        left: 5%;
        right: 5%;
        position: absolute;
        top: 160px;
    }
`;

const PageMainSub = styled.h2`
    font-family: 'NeueMontreal-Regular';
    font-size: 36px;
    line-height: 43.2px;
    color: #ffffff;
    @media (max-width: 1023px) {
        width: 90%;
        padding: 0;
    }
`;

const PageMainContent = styled.p`
    font-size: 24px;
    line-height: 28.8px;   
    color: #DADADA;
    margin-top: 20px;
    position: relative;
    @media (max-width: 1023px) {
        font-size: 20px;
        width: 100%;     
    }
`;
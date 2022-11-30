import React from 'react'
import  styled from 'styled-components'
import { keyframes } from 'styled-components'
import HubspotForm from 'react-hubspot-form'

// SECCIÓN DE CONTACT Y ABOUT
function About() {
    return (
        <AboutWrapper id="about">
            <AboutMain>
                <TitleSub>A recruiting agency for business innovation</TitleSub>
                <p style={{paddingBottom:"40px"}}>Contact us</p>
                <HubspotForm
                    portalId='20639219'
                    formId='728bedd4-3caf-4cb2-982a-862224540cc6'
                    onSubmit={() => console.log('Submit!')}
                    onReady={(form) => console.log('Form ready!')}
                    loading={<div>Loading...</div>}
                    />
            </AboutMain>
        </AboutWrapper>
    )
}

export default About


// ESTILADO
const breatheAnimation = keyframes`
     from {
        transform: translate3d(0,40px,0)
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1
    }
}
`

const AboutWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    scroll-snap-aling: start;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    @media (max-width: 1023px) {
        height: auto;
    }
`;

const AboutMain = styled.div`
    width: 604px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation-name: ${breatheAnimation};
    animation-duration: 2s;
    animation-iteration-count: 1;
        
    @media (max-width: 1023px) {
        width: 90%;
        padding-top: 160px;
        padding-bottom: 160px;
        margin:  auto;
    }
`;

const TitleSub = styled.h2`
    font-size: 24px;
    line-height: 19.2px;
    
    color: #DADADA;
    transition: 2s ease-out;
    cursor: default;
    padding-bottom: 60px;
    :hover{
        transform: translate(0, -50%);
        transition: 3s ease-out;
        color: white
    }
    
`;

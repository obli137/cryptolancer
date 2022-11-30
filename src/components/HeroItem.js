import React from 'react'
import styled from 'styled-components'

// Modificar Estlilado únicamente (a partir de la linea 20)
function HeroItem(props) {
    return (
        <Section>
            <Glow>
                <SectionSub>{props.sectionSub}</SectionSub>
                <h1>{props.sectionMain1} <br/>
                {props.sectionMain2}</h1>
            </Glow>
        </Section>
    )
}

export default HeroItem


const Section = styled.div`  
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    width: 287px;
    padding-bottom: 20px;
    margin-bottom: 40px;
    font-size: 22px;
    transition: 1s ease-out;
       :hover{
        color: black;
        transition: all 1s ease-out;
        transform: scale(1.1) translate(0, -5%);
        & h1, h2{
            color: black;
        }
    }
    & h1, h2{
            color: rgba(0, 0, 0, 0.5);
        }
    @media (max-width:767px){
        width: 80vw;
    }
`;

const Glow  = styled.div`
    line-height: 26.4px;
    width: 287px;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    font-size: 22px;
 
    &  h1{
        font-size: 22px;
    }

`;

const SectionSub = styled.h2`   
    font-size: 14px;
    line-height: 17px;
    width: 287px;
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
      
`;

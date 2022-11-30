import React from 'react'
import  styled from 'styled-components'
import {ReactComponent as Remote} from '../assets/remote.svg'

// Lineas 7-38 => Función creadora del Hire Item, si modificas esto, afecta a todos los componentes usando la misma
// Linea 41 => Empieza el estilado del componente
function HireItem(props) {
    return (
        <HireItemWrapper>
            <JobRemoteWrapper>
                <Icon>
                    {props.icon}
                </Icon>
            </JobRemoteWrapper>
            <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
                <HireItemTitleA>
                        {props.itemTitleA}
                </HireItemTitleA>
                <HireItemTitleB>
                        {props.itemTitleB}
                </HireItemTitleB>
                <HireItemContent>
                        {props.jobStatus}
                </HireItemContent>
                <HireItemContent>
                        {props.jobDuration}
                </HireItemContent>
                <HireItemContent style={{marginBottom:"20px"}} >
                        {props.jobTimezone}
                </HireItemContent>
            
            </div>
            
        </HireItemWrapper>
    )
}

export default HireItem


const HireItemWrapper = styled.div`
    display: flex;
    width: 440px;
    height: fit-content;
    margin-bottom: 20px;
        transition: 1s ease-out;

    }
    @media (max-width: 1023px) {
        width: 100%;        
        margin: auto;
        height: fit-content;
    }
`;

const JobRemoteWrapper = styled.div`
    margin-right: 20px;

`;

const HireItemTitleA =  styled.h1`
    font-size: 24px;
    
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 10px;
    @media (max-width: 1023px) {

  }
`;

const HireItemTitleB =  styled.h1`
    font-size: 22px;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 20px;
    @media (max-width: 1023px) {

  }
`;

const HireItemContent = styled.p`
    color: rgba(0, 0, 0, 0.6);
    font-size: 18px;
    width: 100%;
    @media (max-width: 1023px) {

  }

`;

const Icon = styled.image`
    max-width: 30px;
    max-height: 30px;
    object-fit: contain;
`;
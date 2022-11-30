import React from 'react'
import  styled from 'styled-components'
import {ReactComponent as Remote} from '../assets/remote.svg'

// Lineas 7-36 => Función creadora de un Job Card, si modificas esto, afecta a todos los componentes usando la misma
// Linea 93 empieza el estilado del componente
function JobItem(props) {
    return (
        <JobItemWrapper>
            <JobRemoteWrapper>
                <Remote/>
            </JobRemoteWrapper>
            <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
                <JobItemTitleA>
                        {props.itemTitleA}
                </JobItemTitleA>
                <JobItemTitleB>
                        {props.itemTitleB}
                </JobItemTitleB>
                <JobItemContent>
                        {props.jobStatus}
                </JobItemContent>
                <JobItemContent>
                        {props.jobDuration}
                </JobItemContent>
                <JobItemContent  >
                        {props.jobTimezone}
                </JobItemContent>
            
            </div>
            
        </JobItemWrapper>
    )
}

export default JobItem


const JobItemWrapper = styled.div`
    display: flex;
    width: auto;
    height: fit-content;
    margin-bottom: 20px;
        transition: 1s ease-out;

    }
    @media (max-width: 1023px) {
        width: 80%;        
        margin: auto;
        height: fit-content;
    }
`;

const JobRemoteWrapper = styled.div`
    margin-right: 20px;
    

`;

const JobItemTitleA =  styled.h1`
    font-size: 22px;
    
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 10px;
    @media (max-width: 1023px) {

  }
`;

const JobItemTitleB =  styled.h1`
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 10px;
    @media (max-width: 1023px) {

  }
`;

const JobItemContent = styled.p`
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    @media (max-width: 1023px) {

  }

`;
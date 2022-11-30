import React from 'react'
import JobCard from '../components/JobCard'
import  styled from 'styled-components'
//import JobItem from '../components/JobItem'
import {ReactComponent as BackArrow} from '../assets/right-arrow.svg'
import {ReactComponent as Remote} from '../assets/remote.svg'
import { Link } from 'react-router-dom'

// SECCIONES:
// Lineas 16-48 => Función que devuelve un div compuesto por los componentes "JobItem" y "JobCard":
// Lineas 52-94 => StyledComponents (css en JS), cada componente de esta página tiene su estilo  ahí
// Lineas 96-123 => JOB ITEM Componente. Este componente envía "props" para ser uitlizado en el componente padre
// Lineas 127-177 => StyledComponents para el JOB ITEM
// Para ver el component Jobcard, cambiar carpeta a components/JobCard

function TechLead() {
    return (
        <JobDetails>
                    <Link to="/">
                        <Back>
                            <BackArrow style={{height:"15px"}}/>
                        </Back>
                    </Link>
                    
                    <JobItem
                        itemTitleA="Tech Leader"
                        itemTitleB="React | NodeJS"
                        jobDuration="Duration: 6 Months (possibility of extension)"
                        jobTimezone="Timezone: EST"
                        />
                    
                    <JobCard
                        li1="5+ years of experience in front-end web development."
                        li2="Strong practical experience working with Angular including JavaScript and CSS."
                        li3="Extensive experience working with GraphQL."
                        li4="Proven experience leading a team of engineers on multiple projects, including mentoring junior engineers and guiding their professional growth."
                        li5="Extensive and excellent customer-facing skills."
                        li6="Must be a problem solver who gets excited about challenging engineering puzzles. "
                        li7="Astute and passionate about engineering digital solutions that solve real business problems."
                        li8="Debe estar dispuesto a aprender y absorber los rápidos cambios en la industria de la ingeniería de software."
                        li9="You must be willing to learn and absorb the rapid changes in the software engineering industry."
                        li13="You must be a team player, and this will be demonstrated by setting the team members to success."
                    />
                </JobDetails> 
    )
}

export default TechLead



const JobDetails = styled.div`
    background-color: white;
   
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
`;

const Back = styled.button`
    height: 50px;
    width: 50px;
    background-color: orange;
    position: absolute;
    top: 25px;
    right: 2.5%;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-out;
    z-index: 10000;
    :hover{
        transform: scale(1.05);
        transition: 0.3s ease-out;
    }

    @media (max-width: 1023px) {
        position: fixed;
        top: 31px;
        right: 20px;
        height: 40px;
        width: 40px;
    }
`;

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



const JobItemWrapper = styled.div`
    width: 40vw;
    display: flex;
    align-items: start;
    justify-content: center;
    margin: 9rem 2%;
    transition: 1s ease-out;
    @media (max-width: 1023px) {
        width: 90%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 60px;
        
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
import React from 'react'
import JobCard from '../components/JobCard'
import  styled from 'styled-components'
//import JobItem from '../components/JobItem'
import { Link } from 'react-router-dom'
import {ReactComponent as BackArrow} from '../assets/right-arrow.svg'
import {ReactComponent as Remote} from '../assets/remote.svg'

// SECCIONES:
// Lineas 17-52 => Función que devuelve un div compuesto por los componentes "JobItem" y "JobCard":
// Lineas 55-97 => StyledComponents (css en JS), cada componente de esta página tiene su estilo  ahí
// Lineas 99-126 => JOB ITEM Componente. Este componente envía "props" para ser uitlizado en el componente padre
// Lineas 131-180 => StyledComponents para el JOB ITEM
// Para ver el component Jobcard, cambiar carpeta a components/JobCard

function DevOps() {
    return (
        <JobDetails>
                <Link to="/">
                    <Back>
                        <BackArrow style={{height:"15px"}}/>
                    </Back>
                </Link>
            <div>
            <JobItem
                itemTitleA="Lead DevOps Engineer"
                itemTitleB="React | NodeJS"
                jobDuration="Duration: 6 Months (possibility of extension)"
                jobTimezone="Timezone: EST"
                />
            </div>                       
            <JobCard
                li1="6+ years of DevOps engineering experience, including managing a team of DevOps and support engineers."
                li2="Microsoft Certified Azure Solutions Architect, Microsoft Certified Azure DevOps Professional or CNCF Certified CKA preferido."
                li3="Extensive knowledge and experience with technologies such as Terraform, CloudFormation, ARM Templates, Github Actions, Azure DevOps, Jenkins, Helm, and Bash / Python."
                li4="Extensive knowledge and experience with technologies such as Terraform, CloudFormation, ARM Templates, Github Actions, Azure DevOps, Jenkins, Helm, and Bash / Python."
                li5="Proven experience in the execution and management of automated software deployments."
                li6="Excellent understanding of software development methodologies / standards, complex application domains, building strategies and processes."
                li7="Extensive cloud knowledge and experience building and running Azure / AWS infrastructure."
                li8="Extensive experience with a variety of DevOps tools, including build / automation, configuration management, and container orchestration."
                li9="Extensive and excellent customer-facing skills."
                li10="Astute and passionate about engineering digital solutions that solve real business problems."
                li11="Willing to learn and absorb the rapid changes in the software engineering industry."
                li12="Willing to approach all projects with a relentless focus on the end user and the customer."
                li13="You must be a team player, and this will be demonstrated by setting your team members to success."
            />
        </JobDetails>
    )
}

export default DevOps


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
        height: 10px;
        margin-left: auto;
        margin-right: auto;
        
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
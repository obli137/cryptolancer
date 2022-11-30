import React from 'react'
import JobCard from '../components/JobCard'
import  styled from 'styled-components'
//import JobItem from '../components/JobItem'
import {ReactComponent as BackArrow} from '../assets/right-arrow.svg'
import { Link } from 'react-router-dom'
import {ReactComponent as Remote} from '../assets/remote.svg'

// SECCIONES:
// Lineas 16-51 => Función que devuelve un div compuesto por los componentes "JobItem" y "JobCard":
// Lineas 56-98 => StyledComponents (css en JS), cada componente de esta página tiene su estilo  ahí
// Lineas 101-128 => JOB ITEM Componente. Este componente envía "props" para ser uitlizado en el componente padre
// Lineas 131-174 => StyledComponents para el JOB ITEM
// Para ver el component Jobcard, cambiar carpeta a components/JobCard

function BlockchainDev() {
    return (
        <>
            <JobDetails >
                <Link to="/">
                    <Back>
                        <BackArrow style={{height:"15px"}}/>
                    </Back>
                </Link>
                
                <JobItem
                    itemTitleA="Frontend Tech Lead"
                    itemTitleB="React | Nextjs"
                    jobDuration="Duration: undefinied"
                    jobTimezone="Timezone: GMT-3 (Arg)"
                    />
                                        
                <JobCard
                    li1="6 + años de experiencia en roles de programación, incluyendo el liderazgo técnico sobre prácricas en frontend."
                    li2="4 + años de experiencia trabajando con React (Js o Typescript), de los cuales al menos uno hayas trabajado en Nextjs"
                    li3="Amplio conocimiento y experiencia con entornos serverless, así como conocimientos de Dynamo y AWS"
                    li4="Experiencia en la construcción de pipelines CI/CD, automatizando infraestructuras y pipelines de entrega completos, junto con experiencia y conocimientos en despliegues."
                    li5="Excelente comprensión de las metodologías/estándares de desarrollo de software, dominios de aplicaciones complejas, estrategias y procesos de construcción."
                    li6="Amplia experiencia con una variedad de herramientas DevOps, incluyendola construcción/automatización, la gestión de la configuración y la orquestación de contenedores."
                    li10="Astuto y apasionado por la ingeniería de soluciones digitales que resuelven problemas reales de negocio."
                    li11="Debe estar dispuesto a aprender y absorber los rápidos cambios en la industria de la ingeniería de software."
                    li12="Debe estar dispuesto a abordar todos los proyectos con un enfoque implacable en el  usuario final y el cliente."
                    li13="Debe ser un jugador de equipo, y esto se demostrará mediante el establecimiento de  los miembros del equipo para el éxito."
                />
            </JobDetails> 
        </>
    )
}

export default BlockchainDev


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
import React from 'react'
import  styled from 'styled-components'
//import {ReactComponent as BP} from '../assets/bullet.svg'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

// Función creadora de un Job Card, si modificas esto, afecta a todos los componentes usando la misma
// Linea 96 empieza el estilado del componente

function JobCard(props) {
    return (
        <motion.div
                initial={{x:1000, opacity: 0}}
                animate={{x: 0,opacity: 1}}
                transition={{type:"spring", duration:2, bounce: 0.25}}
                exit={{x:1000, duration:2}}
                
                >
        <JobCardWrapper>
                <JobCardContent>     
                        <JobCardDetails>
                            Nos interesa mucho que cuentes con:
                            <li style={{marginTop:"10%"}}>
                                
                                {props.li1}
                            </li>
                            <li>
                                
                                {props.li2}
                            </li>
                            <li>
                                
                                {props.li3}
                            </li>
                            <li>
                                
                                {props.li4}
                            </li>
                            <li>
                                
                                {props.li5}
                            </li>
                            <li>
                                
                                {props.li6}
                            </li>
                            <li>
                                
                                {props.li7}
                            </li>
                            <li>
                                
                                {props.li8}
                            </li>
                            <li>
                                
                                {props.li8}
                            </li>
                            <li>
                                
                                {props.li9}
                            </li>
                            <li>
                                {
                                props.li10}
                            </li>
                            <li>
                                {
                                props.li11}
                            </li>
                            <li>
                                {
                                props.li12}
                            </li>
                            <Button>
                                <Link to="/apply">
                                APPLY
                                </Link>     
                            </Button>
                            <ButtonBack>
                                <Link  to="/">
                                    GO BACK
                                </Link>
                            </ButtonBack>
                        </JobCardDetails>
                        
                </JobCardContent>
        </JobCardWrapper>
    </motion.div>
    )
}

export default JobCard


const JobCardWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding-bottom: 400px;
    background-color: rgba(0, 0, 0, 0.05);;
    
    overflow-y: scroll;
    @media (max-width: 1023px) {
        width: 100%;        
        margin: auto;
        height: fit-content;
        padding-bottom: 100px;
    }
`;


const JobCardContent = styled.p`
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    @media (max-width: 1023px) {
        
    }
`;
    

const JobCardDetails = styled.ul`
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-family: NeueMontreal-Bold;
    width: 50%;
    height: fit;
    margin-left: 10%;
    padding-top: 150px;
    padding-bottom: 100px;
    li{ 
        list-style: none;
        margin: 20px 0;
        font-family: NeueMontreal-Medium;
        font-size: 20px;
        display: block;
    }
    @media (max-width: 1023px){
        width: 80%;
        margin: auto;
        padding-top: 100px;
        padding-bottom: 0;
    }
`;
    
const Button = styled.button`
    
    width: 300px;
    height: 50px;
    background-color: gray;
    color: white;
    font-size: 20px;
    opacity: 0.8;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    
    margin-bottom: 4%;
    transition: 0.5s ease-out;
    cursor: pointer;
    :hover{
        background-color: orange;
        color: black;
        transition: 0.2s ease-out;
    }
    @media (max-width: 1023px){
        width: 80%;
        margin: auto;
        margin-top: 20%;
    }
`

const ButtonBack = styled.button`
    cursor: pointer;
    width: 300px;
    height: 50px;
    background-color: orange;
    color: white;
    font-size: 20px;
    opacity: 0.8;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 4%;
    margin-bottom: 4%;
    transition: 0.5s ease-out;
    :hover{
        background-color: orange;
        color: black;
        transition: 0.2s ease-out;
    }
    @media (max-width: 1023px){
        width: 80%;
        margin: auto;
        margin-top: 10%;
    }
`
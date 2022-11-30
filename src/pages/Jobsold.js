import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import  styled from 'styled-components'
import Button from '../components/Button'
import JobCard from '../components/JobCard'
import JobItem from '../components/JobItem'
import PageMain from '../components/PageMain'
import LeadOps from '../jobs/LeadOps'


function Job(props) {
    const [showJobDetails, setShowJobDetails] = useState(false)
    const onClick = () => setShowJobDetails(true)  

    return (
            <JobWrapper id="jobs">
                <JobBlock>
                    <PageMain
                        mainSub2="Work. Create. Inspire."
                        mainContent="We build innovative products through the technology and strategic design."    
                    />
                    <JobItemsWrapper>
                        <div>
                            <JobItem
                                itemTitleA="Frontend Tech Lead"
                                itemTitleB="React | Nextjs"
                                jobStatus="Status: Contract/Full-Time"
                                jobDuration="Duration: to be defined"
                                jobTimezone="Timezone: to be defined"/>
                            <InputWrapper onclick={onClick} style={{marginLeft:"60px"}}>
                                <input type="submit" value="More" onClick={onClick} 
                                    style={{backgroundColor:"gray", height:"50px", width:"300px", color:"white", opacity:"0.8", fontSize:"20px", fontFamily:"NeueMontreal-Bold", border:"none", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}/>
                                { showJobDetails ? <LeadOps/> : null}
                            </InputWrapper>
                        </div>
                        <div>
                            <JobItem
                                itemTitleA="Lead DevOps Engineer"
                                itemTitleB="React | NodeJS"
                                jobStatus="Status: Contract/Full-Time (Urgent)"
                                jobDuration="Duration: 6 Months (possibility of extension)"
                                jobTimezone="Timezone: EST"
                                />
                            <InputWrapper onclick={onClick} style={{marginLeft:"60px"}}>
                                <input type="submit" value="More" onClick={onClick} 
                                    style={{backgroundColor:"gray", height:"50px", width:"300px", color:"white", opacity:"0.8", fontSize:"20px", fontFamily:"NeueMontreal-Bold", border:"none", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}/>
                                { showJobDetails ? <LeadOps/> : null}
                            </InputWrapper>
                        </div>
                        <div>
                            <JobItem
                                itemTitleA="Senior Full Stack Developer"
                                itemTitleB="React | NodeJS"
                                jobStatus="Status: Contract/Full-Time (Urgent)"
                                jobDuration="Duration: 6 Months (possibility of extension)"
                                jobTimezone="Timezone: EST"
                                />
                            <InputWrapper onclick={onClick} style={{marginLeft:"60px"}}>
                                <input type="submit" value="More" onClick={onClick} 
                                    style={{backgroundColor:"gray", height:"50px", width:"300px", color:"white", opacity:"0.8", fontSize:"20px", fontFamily:"NeueMontreal-Bold", border:"none", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}/>
                                { showJobDetails ? <LeadOps/> : null}
                            </InputWrapper>
                        </div>
                        <div>
                            <JobItem
                                itemTitleA="Technical Lead"
                                itemTitleB="Angular | GraphQL"
                                jobStatus="Status: Contract/Full-Time (Medium Priority)"
                                jobDuration="Duration: 6 Months (possibility of extension)"
                                jobTimezone="Timezone: EST"/>
                            <InputWrapper onclick={onClick} style={{marginLeft:"60px"}}>
                                <input type="submit" value="More" onClick={onClick} 
                                    style={{backgroundColor:"gray", height:"50px", width:"300px", color:"white", opacity:"0.8", fontSize:"20px", fontFamily:"NeueMontreal-Bold", border:"none", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}/>
                                { showJobDetails ? <LeadOps/> : null}
                            </InputWrapper>
                        </div>
                    </JobItemsWrapper>
                </JobBlock>
            </JobWrapper>
    )
}

export default Job


// ESTILADO
const JobWrapper = styled.div` 
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.9);
    @media (max-width: 1023px) {
        height: auto;
    }
`;

const JobBlock = styled.div`
    margin: auto;
    width: 1240px;
    
    @media (max-width: 1023px) {
        width: 90%;
        margin: auto;
        padding-top: 160px;
        padding-bottom: 160px;
    }
`;

const JobItemsWrapper = styled.div`
    margin-top: 60px;
    color: rgba(0, 0, 0, 0.9);
    display: grid; 
    padding-top: 0; 
    grid-template-columns: 430px 430px; 
    grid-template-rows: 250px 250px; 
    gap: 60px 242px; 
    grid-template-areas: 
        ". ."
        ". ."; 
    @media (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        width: 100%;

        
`;

const InputWrapper = styled.div`
    width: 300px;
    height: 50px;
    background-color: gray;
    color: white;
    opacity: 0.8;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;   
    transition: 0.5s ease-out;
    :hover input{      
        background-color: orange;
        color: black;
        transition: 0.2s ease-out;
    }
`


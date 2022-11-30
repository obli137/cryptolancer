import React from 'react'
import { Link } from 'react-router-dom'
import  styled from 'styled-components'
import JobItem from '../components/JobItem'
import PageMain from '../components/PageMain'

function Job() {

    return (
            <JobWrapper id="jobs">
                <JobBlock>
                    <PageMain
                        mainSub2="Job Opportunities."
                        mainContent="We build innovative products through the technology and strategic design."    
                    />
                    <JobItemsWrapper>
                        <div>
                            <JobSection>
                                <JobItem
                                    itemTitleA="Frontend Tech Lead"
                                    itemTitleB="React | Next"
                                    jobDuration="Duration: 6 Months (possibility of extension)"
                                    jobTimezone="Timezone: ARG"/>
                                <Link to="/BlockchainDev">
                                    <ButtonWrapper >
                                        More
                                    </ButtonWrapper>
                                </Link>
                            </JobSection>
                        
                            <JobSection>
                                <JobItem
                                    itemTitleA="DevOps Lead Engineer"
                                    itemTitleB="React | NodeJS"
                                    jobDuration="Duration: 6 Months (possibility of extension)"
                                    jobTimezone="Timezone: EST"
                                    />
                                <Link to="/DevOps">
                                    <ButtonWrapper >
                                        More
                                    </ButtonWrapper>
                                </Link>
                            </JobSection>
                        </div>
                        <div>
                            <JobSection>
                                <JobItem
                                    itemTitleA="Senior Full Stack Developer"
                                    itemTitleB="React | NodeJS"
                                    jobDuration="Duration: 6 Months (possibility of extension)"
                                    jobTimezone="Timezone: EST"
                                    />
                                <Link to="/SrFullStack">
                                    <ButtonWrapper >
                                        More
                                    </ButtonWrapper>
                                </Link>
                            </JobSection>

                            <JobSection>
                                <JobItem
                                    itemTitleA="Technical Lead"
                                    itemTitleB="React.js | Next.js"
                                    jobDuration="Duration: 6 Months (possibility of extension)"
                                    jobTimezone="Timezone: EST"/>
                                <Link to="/TechLead">
                                    <ButtonWrapper >
                                        More
                                    </ButtonWrapper>
                                </Link>
                            </JobSection>
                        </div>
                    </JobItemsWrapper>
                </JobBlock>
            </JobWrapper>
    )
}

export default Job


// ESTILADO
const JobWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 1023px) {
        height: 100%;
        
    }
`;

const JobBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    
    @media (max-width: 1023px) {
        width: 85%;
        margin: auto;
        padding-bottom: 60px;
    }
`;

const JobItemsWrapper = styled.div`
    margin-top: 40px;
    color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: space-around;
    width: 60vw;
    @media (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin-top: 40%;
        
`;

const  JobSection = styled.div`
    width: 350px;
    margin-bottom: 15%;
    
`

const ButtonWrapper = styled.button`
    width: 75%;
    height: 35px;
    background-color: gray;
    color: white;
    font-size: 18px;
    opacity: 0.8;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 55px;
    margin-bottom: 10%;
    transition: 0.5s ease-out;
    cursor: pointer;
    :hover{
        background-color: orange;
        color: black;
        transition: 0.2s ease-out;
    }
    @media (max-width: 1023px){
        width: 50%;
        margin: auto;
        margin-top: 5%;
    }
`
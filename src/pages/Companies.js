import React from 'react'
import  styled from 'styled-components'
import {ReactComponent as Android} from  '../assets/Jobs/Android.svg'
import {ReactComponent as IOS} from  '../assets/Jobs/ios.svg'
import {ReactComponent as JS} from  '../assets/Jobs/javascript.svg'
//import {ReactComponent as Angular} from  '../assets/Jobs/angular.svg'
import {ReactComponent as Python} from  '../assets/Jobs/python.svg'
import {ReactComponent as ReactJs} from  '../assets/Jobs/react.svg'
import {ReactComponent as Truffle} from  '../assets/Jobs/truffle.svg'
import {ReactComponent as Solidity} from  '../assets/Jobs/solidity.svg'
import {ReactComponent as Kubernetes} from  '../assets/Jobs/kubernetes.svg'
import {ReactComponent as Docker} from  '../assets/Jobs/docker.svg'
import {ReactComponent as Node} from  '../assets/Jobs/node.svg'
//import SliderVertical from '../components/SliderVertical'


//  SECCIÓN PARA COMPANIES
function Companies() {
    return (
        <CompaniesWrapper id="companies">
            <CompaniesBlock>
                <PageMain
                    mainSub2="For Companies."
                    mainContent="Hiring developers of cutting-edge technologies since 2011."    
                />

                <CompaniesItems>
                    <Row>
                        <Duo>
                            <h1>
                                High-Performing Professionals
                            </h1>
                            <p>
                                Cryptolancer provides high-performing professionals for the new generation of companies.
                            </p>
                        </Duo>
                        <Single>
                            <ReactJs/>
                        </Single>
                        <Single>
                            <Node/>
                        </Single>
                    </Row>

                    <Row>
                        <Single>
                            <IOS/>
                        </Single>
                        <Single>
                            <Android/>
                        </Single>
                        <Duo>
                            <h1>
                                You are the owner.
                            </h1>
                            <p>
                                You manage the projects, and the contract between your company and the talent.
                            </p>
                        </Duo>
                    </Row>

                    <Row>
                        <Duo>
                            <h1>
                                Scale now.
                            </h1>
                            <p>
                                Our recruiting method provides candidates within 5 days.
                            </p>
                        </Duo>
                        <Single>
                            <Python/>
                        </Single>
                        <Single>
                            <JS/>
                        </Single>
                    </Row>

                    <Row>
                        <Single>
                            <Truffle style={{transform:"scale(0.4)"}}/>
                        </Single>
                        <Single>
                            <Solidity/>
                        </Single>
                        <Duo>
                            <h1>
                                Scale effectively.
                            </h1>
                            <p>
                                If the candidate resigns before 3 months, we replace him free of charge
                            </p>
                        </Duo>
                    </Row>

                    <Row>
                        <Duo>
                            <h1>
                                Adding value from day one.
                            </h1>
                            <p>
                                Our teams onboard quickly and look for ways to add immediate impact to your team.
                            </p>
                        </Duo>
                        <Single>
                            <Docker/>
                        </Single>
                        <Single>
                            <Kubernetes/>
                        </Single>
                    </Row>

                </CompaniesItems>
                
            </CompaniesBlock>
        </CompaniesWrapper>
    )
}

export default Companies


// ESTILADO
const CompaniesWrapper = styled.div`
    padding: 100px 0;
    width: 100vw;
    height: auto;
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    @media (max-width: 1023px) {
        height: auto;
    }
`;

const CompaniesBlock = styled.div`
    position: relative;
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: auto;
    justify-content: flex-start;
    @media (max-width: 1023px) {
        width: 90%;
        margin: auto;
        
    }
`;

const CompaniesItems = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-top: 5%;
    @media (max-width: 1024px){
        overflow-y: none;
        padding: 0;
        margin: 0;
    }
`

const Row = styled.div`
    display: flex;
    margin: 2.5% ;
    transition: 0.2s ease-out;
    :hover{
        transform: scale(1.1);
        transition: 0.2s ease-out;
    }
    @media (max-width: 1024px){
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        h1{
            font-size: 20px;
        }
        p{
            font-size: 18px;
            
        }
        :hover{
            display: inline;
        }
    }
`

const Duo = styled.div`
    width: 540px;
    hight: 250px;
    padding: 5% 10%;
    @media (max-width: 1024px){
        padding: 0;
        margin: 0;
        width: 100%;
        margin-bottom: 10px;
    }
    
`
const Single = styled.div`
    width: 270px;
    hight: 250px;
    display: flex;
    align-items: center;
    justify-items: center;
    svg {
        width:100%;
        display: flex;
        align-items: center;
        justify-items: center;
    }
   
    @media (max-width: 1024px){
        padding: 0;
        width: 100%;
        margin: 0;
        
        align-items: center;
        justify-content: center;
        svg {
            width:50%;
            display: flex;
            align-items: center;
            justify-items: center;
            display:none;
        }

                
                
    }
`



function PageMain(props) {
    return (
        <PageMainWrapper>
            <PageMainSub>{props.mainSub1}</PageMainSub>
            <PageMainSub>{props.mainSub2}</PageMainSub>
            <PageMainContent>{props.mainContent}</PageMainContent>
        </PageMainWrapper>
    )
}



const PageMainWrapper = styled.div`
    width: auto;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1023px) {
        width: 100%;
        padding: 0;
        margin-bottom: 20%;
        height: 25vh;
  }
    
`;

const PageMainSub = styled.h2`
    font-family: 'NeueMontreal-Regular';
    font-size: 36px;
    line-height: 43.2px;
    color: rgba(0, 0, 0, 0.7);
    @media (max-width: 1023px) {
        width: 100%;
        padding: 0;
        height: 80vh;
  }
`;

const PageMainContent = styled.p`
    font-size: 24px;
    line-height: 28.8px;   
    color: rgba(0, 0, 0, 0.7);
    margin-top: 20px;
    @media (max-width: 1023px) {
        width: 100%;
        padding: 0;
        
  }
    
`;
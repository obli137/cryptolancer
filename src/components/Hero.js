import React from 'react'
import styled from 'styled-components'
import HeroItem from './HeroItem'
import  {ReactComponent as Scroll} from '../assets/scroll.svg'
import background1 from '../assets/Slider/dwoorks-bg-5.jpeg'
import background2 from '../assets/Slider/dwoorks-bg-2.jpeg'
import background3 from '../assets/Slider/dwoorks-bg-3.jpeg'
import {HashLink as Link} from 'react-router-hash-link'

// Lineas 12-68 => Código para el componente HERO
// Para cambiar las imagenes de fondo, ir a linea 32/44/56 e importar los archivos correspondientes
function Hero(props) {
    return (
        <Main id="hero">
            
            <MainWrapperWrap>

                <SectionLeft>
                    <TitleSub>{props.titleSub}</TitleSub>
                    <TitleMain>{props.titleMain}</TitleMain>
                    <TitleContent>{props.titleContent}</TitleContent>
                </SectionLeft>

                <SectionRight>
                    <SectionRightItem>
                    <Link smooth to="#jobs">
                        <Snapper>
                            <HeroItem
                                sectionSub="Be Anywhere, Work Everywhere."
                                sectionMain1="Work Remotely."
                                sectionMain2="Earn in USD/USDT."/>
                            <Background src={background3} alt=""/>
                            <Overlay/>
                        </Snapper>
                    </Link>
                    </SectionRightItem>
                    <SectionRightItem>
                    <Link smooth to="#companies">
                        <Snapper>
                            <HeroItem  
                                sectionSub="For Companies."
                                sectionMain1="The best talent"
                                sectionMain2="for your organization"/>
                            <Background src={background1} alt=""  />
                            <Overlay/>
                        </Snapper>
                    </Link>
                    </SectionRightItem>
                    <SectionRightItem>
                    <Link smooth to="#projects">
                        <Snapper>
                            <HeroItem  
                                sectionSub="Inspiring the Community"
                                sectionMain1="Join Cryptolancer Academy"
                                sectionMain2="and make your first steps."/>
                            <Background src={background2} alt=""/>
                        </Snapper>
                    </Link>
                    </SectionRightItem>
                </SectionRight>
            </MainWrapperWrap>
            <Explore>
                <Scroll/>
            </Explore>
        </Main>
    )
}

export default Hero


const Main = styled.div`  
    width: 100vw;
    margin: auto;
    height: 100vh;
    position: relative;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 1023px) {
        height: 100%;
        padding-top: 5%;
        
    }
    
    `;
    
    const MainWrapperWrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: background-color: rgba(0, 0, 0, 0.1);    

    display: flex;
    justify-content: space-around;
    align-items: center;
  
    
    @media (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 85%;
        height: 100%;
        padding-bottom: 35%;
        padding-top: 35%;
        margin-right: auto;
        margin-left: auto;
        
    } 

`;

const SectionLeft = styled.div`
    color: rgba(0, 0, 0, 0.9);
    width: 499px;
    @media (max-width: 1023px) {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
  }
`;

const TitleMain = styled.h1`
    font-family: NeueMontreal-Light;
    font-size: 64px;
    line-height: 76.8px;
    width: 499px;
    margin-bottom: 20px;
    cursor: default;
    margin-right: 119px;
    transition: 2s ease-out;
    color: rgba(0, 0, 0, 0.9);
    &:hover{
        transition: 2s ease-out;
    }
    @media (max-width: 1023px) {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        font-size: 48px;
        line-height: 54px;
        margin:0
        margin-bottom: 20px;
    }
`;

const TitleSub = styled.h2`
    cursor: default;
    font-size: 14px;
    line-height: 16.8px;
    width: 499px;
    margin-bottom: 20px;
    color: rgba(0, 0, 0, 0.9);
    cursor: default;
    &:hover {
        color: rgba(0, 0, 0, 0.9);
    }
    @media (max-width: 1023px) {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    }
`;

const TitleContent = styled.p`
    font-size: 18px;
    line-height: 21.6px;
    width: 499px; 
    cursor: default;
    transition: all 1s ease-out;
    &:hover {
        transition: 1s ease;
    }
    @media (max-width: 1023px) {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    }

`;

const SectionRight = styled.ul`
    color: rgba(0, 0, 0, 0.9); 
    cursor: pointer;
    list-style: none;
    
    @media (max-width: 1023px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 20%;
        
        
    }
    
    `;

const SectionRightItem = styled.div`
    :first-child{
        li{
            div{
                transform: scale(1);
                animation: pulse-black 2s;   
                transition: 1s ease-out;
            }
            @keyframes pulse-black {
                0% {
                    transform: scale(0.9);
                }
                
                70% {
                    transform: scale(1);
                }
                
                100% {
                    transform: scale(0.95);
                    transition: 1s ease-in;
                }
            }
            
        }
        
    }
`


const Snapper = styled.li`
    
    width: 287px;
    img{
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: all 1s ease-out;       
    }
    
    :hover{
        img {
            opacity: 0.5;
            position: absolute;
            left:0;
            bottom: 0;
            transition: all 1s ease-out;
        }
    }
    
    @media (max-width: 1023px) {        
        img{
            display: none;
        }

    }
`;

const Explore = styled.div`
    border-left: 1px solid; 
    position: absolute;
    bottom:  0;
    background-color: transparent;
    border: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    animation: bounce 1s infinite alternate;
    -webkit-animation: bounce 1s infinite alternate;   
    @media (max-width: 1023px) {
            display: none;
    }
    @keyframes bounce {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(-15px);
        }
    }
    @-webkit-keyframes bounce {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(-15px);
        }
    }
`;


const Background = styled.img`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: -100;
    object-fit: cover;

    animation: fadeInAnimation ease 3s
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    @media (max-width: 1023px) {
        img{
            height: 100%;
            object-fit: cover;
        }
    }
  
    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

`;

const Overlay = styled.div`
    position: absolute; 
    width: 100%; 
    height: 100vh; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.2;
    z-index: -1; 
`;

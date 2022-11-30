import React,{useEffect, useState} from 'react'
import  styled from 'styled-components'
import {ReactComponent as Logo} from '../assets/logo2.svg'
import {ReactComponent as MenuClose} from '../assets/menuclose.svg'
import {ReactComponent as MenuOpen} from '../assets/menuopen.svg'
import {ReactComponent as Empower} from '../assets/vertical.svg'
import {ReactComponent as Instagram} from '../assets/instagram.svg'
import {ReactComponent as Facebook} from '../assets/facebook.svg'
import {ReactComponent as LinkedIn} from '../assets/linkedin.svg'
import {HashLink as Link} from 'react-router-hash-link'

// El menu desplegable empieza en la linea 50 (links)
// A partir de la linea 113 empieza el estilado
function Navbar() {
    const [menuStatus, setMenuStatus] = useState(false)
    const [navBackground, setNavBackground] = useState('navStill')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310
            if (show){
                setNavBackground('navScroll')
            } else {
                setNavBackground('navStill')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return() => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
    
    return (
        <Nav>
            <a style={{textDecoration:"none"}} href="/" to="/" onClick={()=>setMenuStatus(false)}>
          
                    <LogoWrap>
                        <Link smooth to="#hero">
                            <Logo/>
                        </Link>
                    </LogoWrap>
     
            </a>
            <MenuIconContainer onClick={()=>setMenuStatus(true)}>
                <MenuOpen onClick={()=>setMenuStatus(true)}/>
            </MenuIconContainer>
    
            <Menu style={styles.menu} status={menuStatus}>
                
                <CloseContainer>
                    <Close onClick={()=>setMenuStatus(false)}/>
                    <p style={{cursor:"pointer"}} onClick={()=>setMenuStatus(false)}>
                        Get Back
                    </p>
                </CloseContainer>

                <MenuWrapper>

                    <MenuLeft>
                        <EmpowerWrapper>
                            <Empower/>
                        </EmpowerWrapper>
                        <SocialMedia>
                            <Icon>
                                <Instagram/>
                            </Icon>
                            <Icon>
                                <Facebook/>
                            </Icon>
                            <Icon>
                                <a href="https://www.linkedin.com/company/cryptolancerdao"><LinkedIn/></a>  
                            </Icon>
                        </SocialMedia>
                    </MenuLeft>

                    <MenuCenter>
                            <img src="/images/menu.png" alt="" />
                    </MenuCenter>

                    <MenuRight>
                        <li onClick={()=>setMenuStatus(false)}>
                            <Link smooth to="#home"><li>Home</li></Link>
                        </li>
                        <li onClick={()=>setMenuStatus(false)}>
                            <Link smooth to="#jobs"><li>Job Opportunities</li></Link>
                        </li>
                        <li onClick={()=>setMenuStatus(false)}>
                            <Link smooth to="#companies"><li>For Companies</li></Link>
                        </li>
                        <li onClick={()=>setMenuStatus(false)}>
                            <Link smooth to="#about"><li>Contact</li></Link>
                        </li>
                        <Contact>
                            <p style={{fontSize:"12px", lineHeight:"14.4px", color:"rgba(179, 179, 179, 1)"}}>
                                CONTACT
                            </p>
                            <p>
                                info@cryptolancer.tech
                            </p>
                        </Contact>
                    </MenuRight>

                </MenuWrapper>
            </Menu>
        </Nav>
    )
}

export default Navbar

const styles = {
    navStill: {
        backgroundColor:'transparent'
    },
    navScroll: {
        backgroundColor:'red'
    },
}


const Nav = styled.nav`
    width: 100vw;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    height: 100px;
    position: fixed;
    top: 0;
    z-index: 10;
    background-image: rgba(1, 1, 1, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1023px) {
        background-color: white;
    }
`;

const Menu = styled.div`
    position: fixed;
    width: 100vw;
    background-color: white;
    top: 0;
    right: 0;
    bottom: 0;
    list-style: none;
    transform: ${props => props.status ? 'translateY(0)' : 'translate(100%)'};
    transition: transform 0.4s ease-in;
    @media (max-width: 1023px) {
        
    }
`

const LogoWrap = styled.div`
    svg{
        position: absolute;
        z-index: 1000000;
        top: -12px;
    }
}
`;

const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    @media (max-width: 1023px) {   
        margin-right: 5%;
    }

`

const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 100px;
    
    height: 78px;
    @media (max-width: 1023px) {
        padding-right: 5%;
        margin-top:  5%;
    }
`

const Close = styled(MenuClose)`
    cursor: pointer;
    margin-right: 20px;
    @media (max-width: 1023px) {   
          
    }
`;

const MenuWrapper = styled.div`

    position: relative;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 10vh;
    height: 100%;
    @media (max-width: 1023px) {
        text-align: center;
        display: flex;
        margin: 0;
        padding: 0;
        width: 100vw;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }
`

const MenuLeft = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1023px) {
        display: flex;
        flex-direction: row;
    }
`;

const EmpowerWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 1023px) {
        display: none;
    }
    
`;

const SocialMedia = styled.div`
    height: 204px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1023px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 156px;
        align-self: center;
    }
`;

const Icon = styled.div`
    border: 1px solid #DADADA ;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(0, -5%);
    transition: 1s ease-out;
    :hover{
        border: 1px solid #070928;
        transform: translate(0, -15%);
        transition: 1s ease-out;
    }
    : hover path {
        fill: #070928;    
        transition: 1s ease-out;
    }
    @media (max-width: 1023px) {
        width: 32px;
        height: 32px;
    }
`;

const MenuCenter = styled.div`
background-color: blue;width: 600px;
height: 70vh;
position: relative;
img {
        width: 100%;
        height: 100%;
        transition: all 1s ease-out;
        transform-origin: center center;
        filter: brightness(50%);
        object-fit: cover;
    }
    img:hover{
        transform: scale(1.05);
        transition: 1s ease-out;
        filter: brightness(100%);
    }
    @media (max-width: 1023px) {
        display: none;    
    }

`

const MenuRight= styled.ul`
    position: relative;
    height: 70vh;
    list-style-type: none;
    transition: 4s ease-all;
    
    li {
        font-size: 48px;
        line-height: 57.6px;
        color: #070928;
        margin-bottom: 40px;
        font-family: NeueMontreal-Light; 
        cursor: pointer;  
        transition: 0.5s ease-out;
    }
   li:hover{
        color: #dadada;
        transform: translate(0, -5%);
        transition: 1s ease-out;
        
    }
    a {
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 2px;
        color: rgba(218, 218, 218, 1);
        opacity: 0.87;
        margin-top: 40px;
    }
    p {
        font-size: 36px;
        line-height: 43px;
        letter-spacing: 1px;
        color: #070928;
        cursor: pointer;
    }
    @media (max-width: 1023px) {
        text-align: center;
        margin:0;
        padding: 0;
        
        width: 100vw;
        li{
            font-size: 30px;
            line-height: 32px;
            
        }
    }
`

const Contact = styled.div`

@media (max-width: 1023px) {
        p{
            margin-bottom: 5%;
            font-size: 20px;
        }
    }  


`;


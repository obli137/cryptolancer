import React from 'react'
import  styled from 'styled-components'
import Hero from '../components/Hero'
import Companies from './Companies';
import Jobs from './Jobs';
import About from './About'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// IMPORTANTE:
//  Con el ROUTER de React, vas a poder navegar entre la Home Page, y las páginas de trabajos (/src/jobs/...)
//  La Home Page es un solo scroll, por lo que disponemos la sección de la siguiente manera:
//  1) Hero: Lineas 22 a 29
//     - Es el componente responsable para que se muestren las imagenes. 
//     - Para cambiar las imagenes del Hero, ir al componente "../components/Hero.js"
//     - El texto se cambia acá desde la linea 21 hasta la 26
//  2) Jobs: Linea 35   
//     - En esta sección se encuentran los Jobs disponibles. Para editarlos ir a "/pages/Jobs.js"
//  3) Companies: Linea 36
//     - En esta sección se muestran los servicios ofrecidos a las companies. Para editarla ir a "/pages/Companies.js"
//  4) About: Linea 37
//     - En esta sección se encuentra el formulario de CONTACTO
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Home() {
    return (
        <>
        <Main id="home">
            <AppWrapper>
                    <Hero
                        titleSub="Work From Everywhere"
                        titleMain="Making the Bridge"
                        titleContent="We encourage decentralization of the economy by connecting software engineers with web3 based projects."
                        sectionSub="Work hard. Inspire your partners."
                        sectionMain1="Brand new products "
                        sectionMain2="with cutting edge technology."
                    />
                    <Jobs/>
                    <Companies/>
                    <About/>
            </AppWrapper>  
        </Main>
        </>
    )
}

export default Home


// ESTILADO
const Main = styled.div`

    width: 100%;
    height: 100vh;
    @media (max-width: 1024px){
        height: 100%;
    }
    
`;


const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  @media (max-width: 1023px){
        height: 100%;
        scroll-snap-type: none;
  }
`;

import React from 'react'
import '../../App.css'
import AboutMe from '../AboutMe'
import Cards from '../Cards'
import Footer from '../Footer'
import HeroSection from '../HeroSection'


function Home(){
    return (
        <>
            <HeroSection /> 
            <AboutMe />
            <Cards />              
            <Footer />
        </>
    )
}

export default Home
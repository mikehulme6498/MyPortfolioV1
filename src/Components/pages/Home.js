import React from 'react'
import '../../App.css'
import AboutMe from '../AboutMe'
import Cards from '../Cards'
import Footer from '../Footer'
import ProfileSection from '../ProfileSection'


function Home(){
    return (
        <>
            <ProfileSection /> 
            <AboutMe />
            <Cards />              
            <Footer />
        </>
    )
}

export default Home
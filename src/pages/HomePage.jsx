import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import ContactPage from './ContactPage';

const HomePage = () => {
  return (
    <main className="text-black container mx-auto flex flex-col min-h-screen space-y-4">     
        <Hero/>
        <ProjectPage/>
        <AboutPage/>
        <ContactPage/>
    </main>
  )
}

export default HomePage;
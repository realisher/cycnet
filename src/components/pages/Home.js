import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import Form from '../Form';
import Footer from '../Footer';


function Home() {
  return (
    <>
      <HeroSection /> 
      <AboutSection />
      <Form/>
      <Footer/>
      
      

    </>
  );
}

export default Home;
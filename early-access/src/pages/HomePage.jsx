import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import SignupForm from '../components/SignUpForm';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Why from '../components/Why';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <About/>
            <SignupForm/>
            <Why/>
           
            
           
      
            
            <Footer/>
        </div>
    );
};

export default HomePage;
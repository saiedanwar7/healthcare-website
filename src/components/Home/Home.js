import React from 'react';
import About from '../About/About';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';



const Home = () => {
    return (
        <div>
            
            
            <Banner></Banner>
            <Services></Services>
            <Appointment></Appointment>
            <About></About>
        

        </div>
    );
};

export default Home;
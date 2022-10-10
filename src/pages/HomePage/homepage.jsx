import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import HomeCard from '../../Components/HomeCard';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom"


function HomePage(){
    return(
    <body>
        <Header/>
        <h1 className='Slogan'>ANIMALS PLAY A MEANINGFUL ROLE IN OUR LIVES</h1>
        <HomeCard/>
    <article className='Intro'>
        <h2 className='AboutUs'>About Us</h2>
        <p2 >Around us, there is such a group of pets -
            <br></br>
            They live in the open and in the cold, and struggle to survive in the harsh environment.
            <br></br>
            They have a low survival rate, with an average life expectancy of 3 years.
            <br></br>
             They suffer from diseases and usually die within a very short period of time.
             <br></br>
             They are the stray animals in urgent need of human rescue - "fur kids"</p2>
             <br></br>
        <p3>Public Welfare Business Development Center has long been dedicated to helping the needy groups, 
            carrying out poverty relief work, providing material and spiritual comfort for the needy groups,
            and providing services for social organizations, and in recent years has been committed to: 
            professional fundraising communication services.</p3>
    </article>
        <Footer/>
    </body>
    );
}

export default HomePage
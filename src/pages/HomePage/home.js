import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';


function HomePage(){
    return(
    <div>
        <Header/>

    <article className="container">
        <h2>About Us</h2>
        <h3>Around us, there is such a group of pets -

            They live in the open and in the cold, and struggle to survive in the harsh environment.
   
            They have a low survival rate, with an average life expectancy of 3 years.
   
             They suffer from diseases and usually die within a very short period of time.
   
             They are the stray animals in urgent need of human rescue - "fur kids"</h3>
        <h3>Public Welfare Business Development Center has long been dedicated to helping the needy groups, 
            carrying out poverty relief work, providing material and spiritual comfort for the needy groups,
            and providing services for social organizations, and in recent years has been committed to: 
            professional fundraising communication services.</h3>
    </article>

        <Footer/>
    </div>
    );
}

export default HomePage
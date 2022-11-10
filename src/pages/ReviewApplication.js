import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,NavbarBrand } from 'reactstrap';
import AdminSideBar from '../Components/AdminSideBar';
import Application from '../Components/Application';
import React, { useState ,useEffect} from 'react';
import {getAdoption} from '../api/pet_adoption';



function ReviewApplication(){
    
    const [application, setApplication] = useState([]);

    useEffect(()=>{
    const func = async()=>{
        const list = await(getAdoption())
        setApplication(list)
      }
      func()
      }, []);
      console.log (application)

    return(
<div>
    <Nav>
        <NavbarBrand>Pets Home</NavbarBrand>
    </Nav>  
    <AdminSideBar/> 
    <Application ></Application>

</div>


    )
}

export default ReviewApplication
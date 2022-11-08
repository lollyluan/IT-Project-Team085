import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,NavbarBrand } from 'reactstrap';
import AdminSideBar from '../Components/AdminSideBar';
import Application from '../Components/Application';
import React, { useState } from 'react';
import {getAdoption} from '../api/pet_adoption';



function ReviewApplication(){
    
    const [application, setApplication] = useState([]);

    const func = async()=>{
        const list = await(getAdoption( ))
        setApplication(list)
      }

    return(
<div>
    <Nav>
        <NavbarBrand href="/">Pets Home</NavbarBrand>
    </Nav>  
    <AdminSideBar/> 
    <Application userId={application[0].userId}></Application>

</div>


    )
}

export default ReviewApplication
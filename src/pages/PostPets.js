import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,NavbarBrand } from 'reactstrap';
import AdminSideBar from '../Components/AdminSideBar';
import PostPet from '../Components/post';

function PostPets(){
    return(
<div>
    <Nav>
        <NavbarBrand href="/">Pets Home</NavbarBrand>
    </Nav>  
    <AdminSideBar/> 
    <PostPet/>

</div>


    )
}

export default PostPets
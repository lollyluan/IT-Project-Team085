import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,NavbarBrand,Button } from 'reactstrap';
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
    <Button type="submit">Post</Button>
</div>
    )

}


export default PostPets
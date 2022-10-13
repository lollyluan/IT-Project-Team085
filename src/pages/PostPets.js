import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,NavbarBrand,Button } from 'reactstrap';
import AdminSideBar from '../Components/AdminSideBar';
import PostPet from '../Components/post';
import $ from 'jquery';
import { Box2Fill } from 'react-bootstrap-icons';

$(document).ready(function () {
  $('button.addPostTest').on('click',function(){
        var box = $('form.Post').html();
        $('div.App > div').append("<form class='post2'>");
        $('div.App > div form.post2').append(box);
        console.log('added post');
    });
});

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
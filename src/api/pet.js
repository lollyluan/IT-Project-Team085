
const BASE_URL = "http://localhost:8080/api/v1"
//process.env.REACT_APP_BASE_URL
//It's just used for testing


import {getToken, login, isLoggedIn} from './login.js'

async function getPet(id){
    var url = BASE_URL + "/pets/" + id;
    const request = {
        method: 'GET',
       
    }
    return fetch(url, request)
    .then(res => {
        if(res.ok) {
            return res.json();
        }
        else {
            return Promise.reject();
        }
    })
    .then(data => {
        console.log(data)
        return data
    })  
}
async function getPets(pageNo, query) {
    var url = BASE_URL + '/pets/'+pageNo+"?" +"page="+pageNo;
    
    const request = {
    method: 'GET',
   
    }
    for(attr in query){
        if(query[attr] !== "" || query !== null){
            url = url + ("&"+attr + "=" + query[attr])
        }
    }
    
    return fetch(url, request)
    .then(res => {
        if(res.ok) {
            return res.json();
        }
        else {
            return Promise.reject();
        }
    })
    .then(data => {
        console.log(data)
        return data
    })    
}
async function postPet(reqBody){
    const request = {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(reqBody)
       
    }
    //add authentication here
   
    var url = BASE_URL + '/admin/pets' ;

    fetch(url, request)
    
    .then(res => {
        console.log(res)
        if(res.ok) {
            return res.json();
        }
        else {
            return Promise.reject();
        }
    })
    .then(data => {
        console.log(data);
       //alert("Successfully submit!")
    })
    .catch(err => {
        //console.log(err);
        //alert('Something went wrong!');
    });
}


  
  async function deletePet(id){
    const request = {
        headers: {'Content-Type': 'application/json'},
        method: 'DELETE',
        
       
    }
    //add authentication here
   
    var url = BASE_URL + '/admin/pet/'+id ;
 
    fetch(url, request)
    
    .then(res => {
        console.log(res)
        if(res.ok) {
            return res.json();
        }
        else {
            return Promise.reject();
        }
    })
    .then(data => {
       
       //alert("Successfully submit!")
    })
    .catch(err => {
        //console.log(err);
        //alert('Something went wrong!');
    });

  }
  //export {getPets, postPet, deletePet}
  module.exports ={getPets, postPet, deletePet};
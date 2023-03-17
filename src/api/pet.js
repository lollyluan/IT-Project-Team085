import {getToken, login} from './admim_login'
import axios, * as others from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL
//It's just used for testing


async function getPet(id){
    var url = BASE_URL + "/pets/" + id;
    const request = {
        "method": 'GET',
        "Access-Control-Allow-Origin": "*",
       
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
    var url = BASE_URL + '/pets/'+"?page="+pageNo;
    
    const request = {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
        'Origin': "http://localhost:3000"},
      
   
    }
    var attr
    for(attr in query){
      if(query[attr] !== "" && query[attr] !== null){
        url = url + ("&"+attr + "=" + query[attr])
     }
    }
    
     
}
async function postPet(reqBody){
    const request = {
        headers: {
            'Accept': "application/json",
        'Content-Type': 'multipart/form-data',
        'Authorization':'Bearer '+ getToken()
    },
        method: 'POST',
        data: reqBody,
       
        
    }
    //add authentication here
    console.log(getToken())
    var url = BASE_URL + '/admin/pets' ;

    await axios.post(url , request)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
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
export {getPets, postPet, deletePet, getPet};
import {getToken, login} from './admim_login'
import axios, * as others from 'axios';
import $ from 'jquery';
const BASE_URL = process.env.REACT_APP_BASE_URL
//It's just used for testing
var FormData = require('form-data')
async function getPet(id){
    var url = BASE_URL + "/pets/" + id;
    const request = {
        "method": 'GET',
       
    }
    return await fetch(url, request)
    .then(res =>{
        if(res.ok) {
            
            return res.json();
        }
        else {
            return Promise.reject();
        }
    })
    
    .then(data => {
        return data;
    })
    .catch(error => console.log('error', error));
}
async function  getPets(pageNo, query) {
    var url = BASE_URL + '/pets/'+"?page="+pageNo;
    
    var myHeaders = new Headers();
    myHeaders.append("Origin", "localhost:3000/");

    var attr
    for(attr in query){
      if(query[attr] !== "" && query[attr] !== null){
        url = url + ("&"+attr + "=" + query[attr])
     }
    }
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
    return await axios(url, requestOptions)
    .then(res =>{
        if(res.status == 200) {
            
            return res.data
        }
        else {
            return Promise.reject();
        }
    })
    .then(data => {
        return data;
    })
    
    .catch(error => console.log('error', error));
    
     
}
async function postPet(data){
    const fData = new FormData();
    fData.append("category", data.category)
    fData.append("nickname", data.nickname)
    fData.append("detail", data.detail)
    fData.append("color", data.color)
    fData.append("sex", data.sex)
    fData.append("age", data.age)
    fData.append("character", data.character)
    fData.append("immunization", data.immunization)
    fData.append("city", data.city)
    fData.append("country", data.country)
    Array.from(data.images).forEach(image=>{
        fData.append("images", image,  image.name)
    })
    //add authentication here
    var url = BASE_URL + '/admin/pets' ;

    var myHeaders = new Headers();
    myHeaders.append("'Accept'", "application/json");
    //myHeaders.append("Content-Type", "multipart/form-data");
    myHeaders.append("Authorization", "Bearer "+getToken());
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: fData,
      redirect: 'follow'
    };
    
    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
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
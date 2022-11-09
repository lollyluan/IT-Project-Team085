const BASE_URL = process.env.REACT_APP_BASE_URL
//It's just used for testing

import {getToken, login, isLoggedIn} from './login.js'


async function getUserProfile(){
    var url = BASE_URL + "/user/" ;
    const request = {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
        'Authorization':'Bearer '+getToken()}
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
async function updateProfile(reqBody) {
    var url = BASE_URL + '/user/';
    
    const request = {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        'Authorization':'Bearer '+ getToken()},
        body: reqBody
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
async function checkComplete(reqBody){
    const request = {
        headers: {'Content-Type': 'application/json',
        'Authorization':'Bearer '+ getToken()},
        method: 'GET'
       
    }
    //add authentication here
   
    var url = BASE_URL + '/user/complete' ;

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


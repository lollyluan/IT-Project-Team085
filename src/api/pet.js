
const BASE_URL = "http://localhost:8080/api/v1"
//process.env.REACT_APP_BASE_URL
//It's just used for testing
var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.send(deletePet(18));
});

// Only works on 3000 regardless of what I set environment port to or how I set [value] in app.set('port', [value]).
app.listen(3000);
async function getPets(pageNo, query) {
    var url = BASE_URL + '/pet/'+pageNo+"?" ;
    console.log(url)
    const request = {
    method: 'GET',
   
    }
    for(attr in query){
        if(query[attr] !== "" || query !== null){
            url = url + (attr + "=" + query[attr]+"&")
        }
    }
    console.log(url)
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
    console.log(request);
    var url = BASE_URL + '/admin/pets' ;
    console.log(url)
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
        console.log(data);
       //alert("Successfully submit!")
    })
    .catch(err => {
        //console.log(err);
        //alert('Something went wrong!');
    });

  }

const BASE_URL = "http://localhost:8080/api/v1"
//process.env.REACT_APP_BASE_URL
//It's just used for testing
import {getToken, login, isLoggedIn} from './login.js'
import express from"express"
var app = express();

const reqBody = {
    reason: "string",
    passport: "string"
};


app.get('/adoption', function(req, res){
    console.log(getAdoption(getToken()));
    res.send("sent");
});
app.get('/login', function(req, res){
    login("luyuntao2019@gmail.com", "123456")
    res.send(isLoggedIn())
});

// Only works on 3000 regardless of what I set environment port to or how I set [value] in app.set('port', [value]).
app.listen(3000);

async function postAdoptionApplication(petId, reqBody, token) {
    var url = BASE_URL + '/adoption/application/'+petId ;
   
    const request = {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        'Authorization':'Bearer '+ token},
        
        //getCookie('token')},
        body: JSON.stringify(reqBody)
   
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
        
        return data
    })    
    .catch(err => {
        console.log(err);
        //alert('Something went wrong!');
    });
}
async function getAdoptionApplication(token){
    const request = {
        headers: {'Content-Type': 'application/json',
        'Authorization':'Bearer '+ token},
        method: 'GET',
       
       
    }
    //add authentication here
   
    var url = BASE_URL + '/adoption/application' ;

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


async function getAdoption(token){
    const request = {
        headers: {'Content-Type': 'application/json',
        'Authorization':'Bearer '+ token},
        method: 'GET',
       
       
    }
    //add authentication here
   
    var url = BASE_URL + '/adoption/' ;

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

  
  async function deleteAdoptionApplication(petId){
    const request = {
       
        method: 'DELETE',
        headers: {'Content-Type': 'application/json',
        'Authorization':'Bearer '+ token}
       
    }
    //add authentication here
   
    var url = BASE_URL + '/adoption/application/'+petId;
 
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

  async function updateAdoptionApplication(id, status){
    const request = {
       //some admin authentication
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body:status
       
    }
    //add authentication here
   
    var url = BASE_URL + '/admin/adoption/application/'+id +"?applicationstatus="+status;
 
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
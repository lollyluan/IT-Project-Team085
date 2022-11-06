import {getToken, login, isLoggedIn} from './login.js'
const BASE_URL = process.env.REACT_APP_BASE_URL
//It's just used for testing




//add new adoption application
async function postAdoptionApplication(petId, reqBody) {
    var url = BASE_URL + '/adoption/application/'+petId ;
   
    const request = {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        'Authorization':'Bearer '+ getToken()},
        
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
//Get all of adoption application of a user
async function getAdoptionApplication(){
    const request = {
        headers: {'Content-Type': 'application/json',
        'Authorization':'Bearer '+ getToken()},
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

// get the detail of successful adoption
async function getAdoption(){
    const request = {
        headers: {'Content-Type': 'application/json',
        'Authorization':'Bearer '+ getToken(),
        'Access-Control-Allow-Origin': '*'},
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

  //Delete the adoption application
  async function deleteAdoptionApplication(petId){
    const token = getToken
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
//update the status of adoption application
  async function updateAdoptionApplication(id, status){
    const request = {
       //some admin authentication
        method: 'PUT',
        headers: {'Content-Type': 'application/json',
        'Authorization':'Bearer '+ getToken()},
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
  export{
    postAdoptionApplication,
    updateAdoptionApplication
  }
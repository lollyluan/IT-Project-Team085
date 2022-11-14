import {getToken, login, isLoggedIn} from './login.js'

const BASE_URL = process.env.REACT_APP_BASE_URL

async function getDonation(){
    var url = BASE_URL + "/donation/" ;
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

async function postDonation(reqBody) {
    var url = BASE_URL + '/donation/';

    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + getToken()
        },
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
        console.log(data);
        alert("Successfully submit!");
        return data;
    })
}

export {postDonation, getDonation}
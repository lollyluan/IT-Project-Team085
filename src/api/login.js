
import pkg from 'jwt-decode';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

const {jwt_decode} = pkg;

const BASE_URL = process.env.REACT_APP_BASE_URL

//const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
//const currentUser=currentUserSubject.asObservable()

//const navigate = useNavigate();

function login(email, password) {
    
    const url = BASE_URL + '/auth/user/login';
    const requestInit = {
        method: 'POST',
        // mode: 'no-cors',
        headers: {'Content-Type': 'application/json','mode': 'no-cors'},
        body: JSON.stringify({
            'email': email,
            'password': password
        })
    }
   
    fetch(url, requestInit)
    .then(res => {
        if(res.ok) {
            console.log(process.env)
            alert("Logged in successfully")
            return res.json();
            
        }
        else {
            return Promise.reject();
        }
    })
    .then(user => {
      
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        const token = user.token;
        localStorage.setItem("token", token);
        
        window.location.href=process.env.BASE_URL;
       
        return user;
    })
    .catch((e) => {
        alert("failed to sign in, try again!")
    });
}

function signUp(email, password, firstname, lastname) {
    const url = BASE_URL + '/auth/user/register';
    const requestInit = {
        method: 'POST',
        // mode: 'no-cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
       
            'password': password,
            'email': email,
            'firstname': firstname,
            'lastname': lastname
        })
    }
    console.log(requestInit);

    fetch(url, requestInit)
    .then(res => {
        if(res.ok){
            alert("sign up successfully, please check your email!")
            window.location.href=process.env.BASE_URL;
        }
        else{
            alert('Failed to sign up, try again');
        }
     
    })
    // .then(data => {
    //     console.log(data);
    //     //document.location.href = '/home';
    // })
    .catch((e) => {
       
        console.log(e)}
        );
}

function isLoggedIn() {
    return localStorage.getItem('token') != undefined;
}
function getToken(){
    return localStorage.getItem('token');
}
function getUserId() {
    if(isLoggedIn()) {
        
        const jwt =jwt_decode(localStorage.getItem('token'))

        return jwt.userId;
    } 
    return undefined;
}
function logOut(){
    localStorage.removeItem("token");
}
export {
    getToken,
    login,
    signUp,
    isLoggedIn,
    getUserId,
    logOut
}
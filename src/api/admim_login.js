
import pkg from 'jwt-decode';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

const {jwt_decode} = pkg;

const BASE_URL = process.env.REACT_APP_BASE_URL

//const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
//const currentUser=currentUserSubject.asObservable()
const role = "admin"


function login(username, password) {
    const url = BASE_URL + '/auth/admin/login';
    const requestInit = {
        method: 'POST',
        // mode: 'no-cors',
        headers: {'Content-Type': 'application/json','mode': 'no-cors'},
        body: JSON.stringify({
            'username': username,
            'password': password
        })
    }
   
    fetch(url, requestInit)
    .then(res => {
       
        if(res.ok) {
            alert("Logged in successfully")
           
            return res.json();
            
        }
        else {
            alert("failed to login, try again!")
            return Promise.reject();
            
        }
    })
    .then(user => {
      
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('token', user.token)
        localStorage.setItem('role', role)
        window.location.href=process.env.REACT_APP_HOME+'admin/Dashboard/postPet';
        return user;
    })
    .catch((e) => {
        console.log('Failed to sign in, try again ' + e);
        $('.App .error_message').html('Failed to sign in, try again');
       // document.location.href = '/login';
    });
}

function signUp(username, password) {
    const url = BASE_URL + '/auth/admin/register';
    const requestInit = {
        method: 'POST',
        // mode: 'no-cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'username': username,
            'password': password
            
           
        })
    }

    fetch(url, requestInit)
    .then(res => {
        const navigate = useNavigate();
        if(res.ok) {
            console.log('registered done!');
            login(username, password);
            navigate('/admin/login')
            return res.json();
        }
        else {
            return Promise.reject();
        }
    })
    .then(data => {
        console.log(data);
        //document.location.href = '/home';
    })
    .catch((e) => {alert('Failed to sign up, try again');
    console.log(e)});
}

function loggedIn() {
    return (localStorage.getItem('token')!==undefined  && localStorage.getItem('role')==role);
}
function getToken(){
    return localStorage.getItem('token');
}
function getUserId() {
    if(loggedIn()) {
        
        const jwt =jwt_decode(localStorage.getItem('token'))

        return jwt.userId;
    } 
    return undefined;
}
function logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href=process.env.REACT_APP_HOME;
}

export {
    getToken,
    login,
    signUp,
    loggedIn,
    getUserId,
    logOut
}
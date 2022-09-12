
import pkg from 'jwt-decode';
const {jwt_decode} = pkg;

const BASE_URL = "http://localhost:8080/api/v1"
//process.env.REACT_APP_BASE_URL

//const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
//const currentUser=currentUserSubject.asObservable()

const jsdomConfig = { userAgent: 'Custom UA' };
var token = ""
/*var app = express();
app.get('/login', function(req, res){
    login("luyuntao2019@student.unimelb.edu.au", "123456")
    res.send(isLoggedIn())
});
app.listen(3000);*/
function login(email, password) {
    const url = BASE_URL + '/auth/user/login';
    const requestInit = {
        method: 'POST',
        // mode: 'no-cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'email': email,
            'password': password
        })
    }
   
    fetch(url, requestInit)
    .then(res => {
        if(res.ok) {
            console.log(res)
            return res.json();
            
        }
        else {
            return Promise.reject();
        }
    })
    .then(user => {
      
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        token = user.token;
        
       

        return user;
    })
    .catch((e) => {
        console.log('Failed to sign in, try again ' + e);
        //document.location.href = '/home';
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

    fetch(url, requestInit)
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
        //document.location.href = '/home';
    })
    .catch(() => alert('Failed to sign up, try again'));
}

function isLoggedIn() {
    return token != '';
}
function getToken(){
    return token;
}
function getUserId() {
    if(isLoggedIn()) {
        
        const jwt =jwt_decode(token)

        return jwt.userId;
    } 
    return undefined;
}

export {
    getToken,
    login,
    signUp,
    isLoggedIn,
    getUserId
}
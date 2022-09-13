import React, {useState} from 'react';

import {login, signUp} from '../../api/login'






export default function LoginPage(props) {
    const [isLogin, setIsLogin] = useState(true);

    return(
        <div>
          <Login handleSignUp={() => setIsLogin(false)}/> 
       
        </div>
    )
}



function Login(props) {
    const {handleSignUp} = props

    const [email, setEmail] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleClickShowPassword = function() {
        setShowPassword(!showPassword);
    }

    const handleChangePassowrd = function(e) {
        setPassword(e.target.value);
    }

    // TODO how to remember
    const [rememberMe, setRememberMe] = useState(false);


    //TODO connect backend
    const handleSignIn =()=> {
        console.log("hello")
        console.log(`${email}, ${password}`);
        if(email !== '' && password !== '') {
            
            login(email, password)

        }else {
            alert('Enter username and password!');
        }
        
    }


    return (
   
            <form class='login-form'>
                <label>email</label><br/>

                <input className='inputField' type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br/>

                <label>Password</label><br/>
                <input className='inputField' type={showPassword ? 'text' : 'password'} value={password} onChange={handleChangePassowrd}></input>

            

                <div className='options'>
                    <div>
                        <input type='checkbox' checked={rememberMe} onClick={()=>{setRememberMe(!rememberMe)}}></input>
                        Remember me
                    </div>
                    <div onClick={()=>{alert('Oh no, can you try to remember it?')}}>
                        Forget password?
                    </div>
                </div>
                <div className='button' onClick={handleSignIn}>
                    Sign In
                </div>
     
            </form>
     
    );
}


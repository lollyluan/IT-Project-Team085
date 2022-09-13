import { signUp } from '../../api/login';
import React, {useState} from 'react';
function SignUp() {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const handleChangePassword = function(e) {
        setPassword(e.target.value);
    }

    const [password2, setPassword2] = useState('');
    const handleChangePassword2 = function(e) {
        setPassword2(e.target.value);
    }

   
    const [firstname, setFirstname] = useState('');

    const [lastname, setLastname] = useState('');
   



    //TODO connect backend
    const handleSignUp = function() {
        if(email!== '' && password !== '') {
            if(password === password2) {
                alert(email);
                alert(password)
               signUp(email, password, firstname, lastname)
            }else {
                alert('Double check your password!');
            }
            
        }else {
            alert('Enter username and password!');
        }
    }    
    const [step, setStep] = useState(0);
    const [timeoutId, setTimeoutId] = useState(0);
    const [options, setOptions] = useState([]);



    return(
           
                <form class='login-form'>
                    {
                        step === 0 ? 
                        <div >

                            <label>First name</label><br/>

                            <input className='inputField' type='text' value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}></input><br/>

                            <label>Last name</label><br/>
                           
                            <input className='inputField' type='text' value={lastname} onChange={(e)=>{setLastname(e.target.value)}}></input><br/>
                            <label>email</label><br/>
                            <input className='email' type='text' value={email} onChange={e=>setEmail(e.target.value)}></input><br/>
                            <label>Password</label><br/>

                            <input className='inputField' type='password' value={password} onChange={handleChangePassword}></input><br/>

                            <label>Re-enter Password</label><br/>

                            <input className='inputField' type='password' value={password2} onChange={handleChangePassword2}></input><br/>
                            <div className='navigate-button' style={{textAlign: 'right'}} onClick={()=>setStep(1)}>{'next >>'}</div>
                        </div> :
                        <div>
                            <div className='navigate-button' style={{textAlign: 'left'}} onClick={()=>setStep(0)}>{'<< go back'}</div>
                           
                            <div className='button' onClick={handleSignUp}>
                                Sign Up
                            </div>
                        </div>
                    }
                </form>
      
    )
}



export default function RegisterPage(props) {
 

    return(
        <div>
        <SignUp/>
       
        </div>
    )
}
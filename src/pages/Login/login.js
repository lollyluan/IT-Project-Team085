import React, {useState} from 'react';







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
    const handleSignIn = function() {
        if(email !== '' && password !== '') {
            console.log("log in");
           // login(email, password);
            
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

function SignUp(props) {
    const {handleSignIn} = props

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const handleChangePassowrd = function(e) {
        setPassword(e.target.value);
    }

    const [password2, setPassword2] = useState('');
    const handleChangePassowrd2 = function(e) {
        setPassword2(e.target.value);
    }

   
    const [firstname, setFirstname] = useState('');

    const [lastname, setLastname] = useState('');
   



    //TODO connect backend
    const handleSignUp = function() {
        if(email!== '' && password !== '') {
            if(password === password2) {
                console.log("sign up");
               // signUp(email, password, firstname, lastname)
                //.then(res => res.json())
                //.then(data => console.log(data));
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

    /*const handleAddressChange = (e) => {
        clearTimeout(timeoutId)
        
        setAddress(e.target.value)
                
        if(e.target.value.length >= 3) {
            
            setTimeoutId(setTimeout(()=>{
                addressLookup(e.target.value)
                .then(result => {
                    setOptions(result)
                })
            }, 1000))
        }
        
    }*/

    return(
           
                <form class='login-form'>
                    {
                        step === 0 ? 
                        <div >

                            <label>First name</label><br/>

                            <input className='inputField' type='text' value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}></input><br/>

                            <label>lastname</label><br/>
                           
                            <input className='inputField' type='text' value={email} onChange={(e)=>{setLastname(e.target.value)}}></input><br/>

                            <label>Password</label><br/>

                            <input className='inputField' type='password' value={password} onChange={handleChangePassowrd}></input><br/>

                            <label>Re-enter Password</label><br/>

                            <input className='inputField' type='password' value={password2} onChange={handleChangePassowrd2}></input><br/>
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
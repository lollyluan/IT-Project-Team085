import { Label } from '@mui/icons-material';
import React from 'react';
import {useState} from 'react';
import { Button,Form,Input,Label} from 'reactstrap';
import {login} from '../../api/login';




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
        
        <body className="initial-img row">
            <Label className="contianer col-lg-5 Logo">
                 <h1 className="disabled" href="#">PetHome</h1>
            </Label>

            <div className="contianer col-lg-7">
            <Form class='login-form'>
                <Label>email</Label><br/>

                <Input className='inputField' type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}></Input><br/>

                <Label>Password</Label><br/>
                <Input className='inputField' type={showPassword ? 'text' : 'password'} value={password} onChange={handleChangePassowrd}></Input>

            

                <div className='options'>
                    <div>
                        <Input type='checkbox' checked={rememberMe} onClick={()=>{setRememberMe(!rememberMe)}}></Input>
                        Remember me
                    </div>
                    <div onClick={()=>{alert('Oh no, can you try to remember it?')}}>
                        Forget password?
                    </div>
                </div>

                <Button className='button' onClick={handleSignIn}>
                    Sign In
                </Button>

                <div className="center"><p>- Or - </p></div>
                <Col className="row1 sbtn">
                   <Button><img className='btn btn-outline-success' src="icons/google.svg" alt="" onClick={handleSignIn}>Sign up with Google</img></Button>
                   <Button><img className='btn btn-outline-success' src="icons/facebook.svg" alt="" onClick={handleSignIn}>Sign up with Google</img></Button>
                </Col>
                <Label className="center">Don’t have an account, Register Here!</Label>
            </Form>
            </div>
    </body>
     
    );
}


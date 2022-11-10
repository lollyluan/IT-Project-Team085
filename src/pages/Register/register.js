import { signUp, login } from '../../api/login';
import React, { useState } from 'react';
import { Button, Form, Input, Label, Row, Col } from 'reactstrap';
import { login as adminLogin } from '../../api/admim_login';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  // TODO how to remember
  const [rememberMe, setRememberMe] = useState(false);

  const handleChangePassword = function (e) {
    setPassword(e.target.value);
  };

  const handleChangePassword2 = function (e) {
    setPassword2(e.target.value);
  };

  const isAdmin = () => {
    return window.location.href.includes('admin');
  };

  //TODO connect backend
  const handleSignUp = async function () {
    if (email !== '' && password !== '') {
      if (password === password2) {
        const api = isAdmin() ? adminLogin : login;
        try {
        
          const res = await signUp(email, password, firstname, lastname);
          console.log(res)
        
          if (res) {
            api(email, password);
          }
        } catch (err) {
          alert('Failed to sign up, try again');
        }
      } else {
        alert('Double check your password!');
      }
    } else {
      alert('Enter username and password!');
    }
  };

  return (
    <body className="initial-img row noPadding">
      <Label className="contianer col-lg-4 LogoPosition">
        <h1 className="disabled Logo" href="#">
          PetHome
        </h1>
      </Label>

      <div className="contianer col-lg-8">
        <Form className="login-form" action="">
          <Label className="contianer col-lg-5">
            <h2 className="disabled" href="#">
              Create a New Account
            </h2>
          </Label>

          <div className="smallInput">
            <div className="inputInRow">
              <Input
                className="inputField"
                placeholder="First name"
                type="text"
                value={firstname}
                onChange={e => {
                  setFirstname(e.target.value);
                }}
              ></Input>
              <br />
            </div>
            <div className="inputInRow">
              <Input
                className="inputField"
                placeholder="Last name"
                type="text"
                value={lastname}
                onChange={e => {
                  setLastname(e.target.value);
                }}
              ></Input>
              <br />
            </div>
          </div>

          <Input
            className="email"
            placeholder="Email"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></Input>
          <br />

          <div className="smallInput">
            <div className="inputInRow">
              <Input
                className="inputField"
                placeholder="Password"
                type="password"
                value={password}
                onChange={handleChangePassword}
              ></Input>
              <br />
            </div>
            <div className="inputInRow">
              <Input
                className="inputField"
                placeholder="Confirm Password"
                type="password"
                value={password2}
                onChange={handleChangePassword2}
              ></Input>
              <br />
            </div>
          </div>

          <div className="options">
            <div>
              <Input
                type="checkbox"
                checked={rememberMe}
                onClick={() => {
                  setRememberMe(!rememberMe);
                }}
              ></Input>
              I agreed to the Terms of Use and Praivacy Policy.
            </div>
          </div>

          <Button className="button" onClick={handleSignUp}>
            Register
          </Button>

          <div className="center">
            <p>- Or - </p>
          </div>
          <Button className="button">SignUp with Google</Button>
          <Button className="button">SignUp with Facebook</Button>

          <Label className="center">
            Don’t have an account, Register Here!
          </Label>
        </Form>
      </div>
    </body>
  );
}

export default SignUp;


import React, { useState } from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
import { login } from '../../api/login';
import { login as adminLogin } from '../../api/admim_login';

const Login = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const isAdmin = () => {
    return window.location.href.includes('admin');
  };

  // isShowPassword
  const handleClickShowPassword = function () {
    setShowPassword(!showPassword);
  };

  // login
  const handleSignIn = async () => {
    // 通过 url 是否包含 admin 判断 是否是 admin 登录  isAdmin true: admin || false: 普通用户
    const api = isAdmin() ? adminLogin : login;
    if (!email || !password) {
      alert('Enter username and password!');
    } else {
      /* 这块你调 接口的 时候 解开注释 调试一下 */
    api(email,password)
    }
  };

  return (
    <div className="initial-img row">
      <div className="error_message"></div>
      <Label className="contianer col-lg-4 LogoPosition">
        <h1 className="disabled Logo" href="#">
          PetHome
        </h1>
      </Label>

      <div className="contianer col-lg-8">
        <Form className="login-form">
          <Label className="contianer col-lg-5">
            <h2 className="disabled" href="#">
              Login as User
            </h2>
          </Label>
          <Input
            className="inputField"
            placeholder="Email"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></Input>
          <br />
          <Input
            className="inputField"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></Input>

          <div className="options">
            <span>
              <Input
                type="checkbox"
                checked={rememberMe}
                onClick={() => {
                  setRememberMe(!rememberMe);
                }}
              ></Input>
              Remember me
            </span>
            <span
              onClick={() => {
                alert('Oh no, can you try to remember it?');
              }}
            >
              Forget password?
            </span>
          </div>

          <Button className="button" onClick={handleSignIn}>
            Login
          </Button>

          <div className="center">
            <p>- Or - </p>
          </div>

          <Button className="button">Login with Google</Button>
          <Button className="button">Login with Facebook</Button>

          <Label className="center">
            Don’t have an account, Register Here!
          </Label>
        </Form>
      </div>
    </div>
  );
};

export default Login;

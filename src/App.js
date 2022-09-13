
import './App.css';
import LoginPage from './pages/Login/login';
import RegisterPage from './pages/Register/register';
import HomeRouter from './router/home';
import React from 'react';
function App() {
  return (
    <div className="App">
      <HomeRouter/>
    </div>
  );
}

export default App;

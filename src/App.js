
import './App.css';
import LoginPage from './pages/Login/login';
import RegisterPage from './pages/Register/register';
import HomeRouter from './router/home';
import React from 'react';
import DisplayPets from './pages/Petlist/petlist';

function App() {
  return (
    <div className="App">
      <DisplayPets/>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import LoginPage from './pages/Login/login';
import RegisterPage from './pages/Register/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeRouter from './router/home';
import DisplayPets from './pages/Petlist/petlist';
import HomePage from './pages/HomePage/Home';
import AdminSideBar from './Components/AdminSideBar';

function App() {
  return (
    <div className="App">
      <HomeRouter/>
    </div>
  );
}

export default App;

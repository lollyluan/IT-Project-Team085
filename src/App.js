import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeRouter from './router/home';
import PetRouter from './router/pets';
import { Pets } from '@mui/icons-material';
import PetList from './Components/petlist';
import UploadAndDisplayImage from './Components/image';
import PostPet from "./Components/post";
import AdminLoginPage from './pages/admin_login';

function App() {
  return (
    <div className="App">
    <AdminLoginPage/>
      <PostPet/>
    </div>
  );
}

export default App;
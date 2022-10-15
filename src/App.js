import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeRouter from './router/home';
import PetRouter from './router/pets';
import { Pets } from '@mui/icons-material';
import PetList from './Components/petlist';
import UploadAndDisplayImage from './Components/image';
function App() {
  return (
    <div className="App">
      <PetRouter/>
    </div>
  );
}

export default App;
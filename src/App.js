import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeRouter from './router/home';
import PetRouter from './router/pets';

function App() {
  return (
    <div className="App">
      <PetRouter/>
    </div>
  );
}

export default App;
 
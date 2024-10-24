import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Componentes/Header';


function App() {
  return (
    <div className='App'>
      <div>
        <Header />
      </div>
      
      <div className="App-body">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

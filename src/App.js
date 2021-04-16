import './App.css';
import React from 'react'

import { CreateNote } from './Components/CreateNote';
import { PrintNote } from './Components/PrintNote';

function App() {
  return (
    <div className="App">
        <h1>Mis Notas</h1>
        <PrintNote />
        <button><a href="#crearNota">Escribir nueva nota</a></button>
        <CreateNote />
    </div>
  );
}

export default App;

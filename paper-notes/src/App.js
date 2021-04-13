import './App.css';
import React from 'react'

import { CreateNote } from './Components/createNote/CreateNote';

function App() {
  return (
    <div className="App">
        <h1>Mis Notas</h1>
        <a href="#crearNota">Escribir nueva nota</a>
        <CreateNote />
    </div>
  );
}

export default App;

import './App.css'
import React from 'react'

import { Start } from './Components/Start'
import { Register } from './Components/Register'
import { PrintNote } from './Components/PrintNote';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Link to="/wall">Iniciar Sesion</Link>
      <Link to="/register">Registrate</Link>
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/wall">
            <PrintNote />
        </Route>
      </Switch>
    </Router>
      // <div className="App">

      // </div>
  );
}

export default App;

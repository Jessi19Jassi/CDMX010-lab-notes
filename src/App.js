import './App.css'
import React, {useState, useEffect}  from 'react'

import { Start } from './Components/Start'
import { Register } from './Components/Register'
import { PrintNote } from './Components/PrintNote';
import { auth } from './firebase/Firebase'


import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {

  const[user, setUser] = useState(null) //No hubo nada establecido(ningún valoor)

  useEffect(()=>{ //Estado del servidor
    auth.onAuthStateChanged((user)=>{ //user del servidor
        if(user){
            setUser(user) //Cuando existe el usuario setUser. Sincro
        }else{
            setUser(false) //Cuando no existe el usuario
        }
    })
},[])

  return (
    <>
    {user !== null ? (
      <Router>
      <Link to="/wall">Iniciar Sesion</Link>
      <Link to="/register">Registrate</Link>
      <Switch>
        <Route exact path="/">
          <Start user={user} />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/wall">
            <PrintNote  user={user}/>
        </Route>
      </Switch>
    </Router>
    ): <p>Cargando...</p>}
  </>
  );
}

export default App;

import './Start.css'
import React, {useState} from 'react'
import logo from '../images/logo.png'
import facebook from '../images/facebook.png'
import google from '../images/google.png'
import { auth } from '../firebase/Firebase'
import { Redirect } from 'react-router';




export const Start = (props) => {

    const initialInputs = { //Valor inicial del estado
        email: '',
        password: ''
    }

    const[inputs, setInputs] = useState(initialInputs)

    function handleOnChange(e){ //En que estado se encuentra, valor de estado para saber si cambio
        const {id, value} = e.target //Validar datos
        setInputs({...inputs, [id]: value})
    }

    function handleSubmit(e){ //Función que envía datos
        e.preventDefault() //Para que no recargue la página
        auth.signInWithEmailAndPassword(inputs.email, inputs.password)
        .then((user)=> console.log('Entrada con éxito')) //Consunmimos el resultado de la promesa
    }

    if(props.user){ //Si es falso el usuario lo redirijera a otra parte
        return <Redirect to="/wall" />
    }


    return(
        <div className="start">
            <div className="madre">
                <img className="logo" src={logo} alt="logo"></img>
                <h2>Inicia sesión con</h2>
            </div>
            <div className="logos">
                <img className="facebook" src={facebook} alt="facebook"></img>
                <img className="google" src={google} alt="google"></img>
            </div>

            <div className="formRegister">
                <form className="formulario" onSubmit={handleSubmit}>
                <label htmlFor="email"></label>
                        <input 
                            id="email"
                            value={inputs.email} //Cuando el estado cambie, se necesita sacar el valor que el usuario ingrese
                            type="email"
                            onChange={handleOnChange}
                            placeholder="Correo electrónico" />
                    <input 
                            id="password"
                            value={inputs.password}
                            onChange={handleOnChange}
                            type="password"
                            placeholder="Contraseña" />
                        <input className="buttonLogin" type="submit" value="Inicia Sesión" />
                    <a href="#">Registrate</a>
                </form>
            </div>
        </div>
    );
}
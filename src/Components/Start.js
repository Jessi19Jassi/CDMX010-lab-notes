import './Start.css'
import React from 'react'
import logo from '../images/logo.png'
import facebook from '../images/facebook.png'
import google from '../images/google.png'


export const Start = () => {
    return(
        <div className="start">
            <img className="logo" src={logo} alt="logo"></img>
            <h2>Inicia sesión con</h2>
            <div className="logos">
                <img className="facebook" src={facebook} alt="facebook"></img>
                <img className="google" src={google} alt="google"></img>
            </div>

            <div className="formRegister">
                <form className="formulario">
                    <input placeholder="Correo electrónico" />
                    <input placeholder="Contraseña" />
                    <button>Inicia Sesion</button>
                    <a href="#">Registrate</a>
                </form>
            </div>
        </div>
    );
}
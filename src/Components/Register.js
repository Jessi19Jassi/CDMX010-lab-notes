import React, { useState } from 'react'
import './Register.css'
import logo from '../images/logo.png'
import { auth } from '../firebase/Firebase'


export const Register = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[msgError, setMsgError] = useState(null)

    const registerUser = (e) =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then(r =>  alert('Usuario registrado'))
        .catch(error => {
            if(error.code === 'auth/invalid-email'){
                setMsgError('Correo electrónico incorrecto')
            }
            if(error.code === 'auth/weak-password'){
                setMsgError('La contraseña debe tener al menos 6 caracteres')
            }
        })
    }

    return(
            <div className="register">
                <h2>Registrate!</h2>
                <div className="forRegister">
                    <form className="formu" onSubmit={registerUser}>
                        <input 
                            onChange={(e)=>{setEmail(e.target.value)}}
                            placeholder="Correo electrónico" />
                        <input 
                            onChange={(e)=>{setPassword(e.target.value)}}
                            placeholder="Contraseña" 
                            type="password"/>
                        <button value="regUser">Registrate</button>
                    </form>
                        {
                        msgError !== null ?
                        (
                            <div>{msgError}</div>
                        )
                        :
                        (
                            <span></span>
                        )
                        }
                </div>
                <img className="logo" src={logo} alt="logo"></img>
            </div>
    );
}
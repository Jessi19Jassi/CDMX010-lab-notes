import './Start.css'
import React from 'react'

export const Start = () => {
    return(
        <div className="start">
            <h2>Inicia sesión con</h2>
            <div className="formRegister">
                <form>
                    <input placeholder="Correo electrónico" />
                    <input placeholder="Contraseña" />
                </form>
            </div>
        </div>
    );
}
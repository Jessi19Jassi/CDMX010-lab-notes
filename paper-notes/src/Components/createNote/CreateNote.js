import React from 'react';
import './CreateNote.css';


export const CreateNote = () => {
    return(
    <div className = "createNote">      
         <div id="crearNota" className="crearNota">
            <div className="nota">
                <a href="#" className="cerrar">x</a>
                <div className="formulario">
                    <input type="text" placeholder="Título" className="titulo" />
                    <textarea type="text" placeholder="Escribir nota"></textarea>
                    <button>Guardar</button>
                </div>
            </div>
        </div> 
    </div>
    );
}
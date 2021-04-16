import React, { useState } from 'react';
import './CreateNote.css';
import { setCollection } from '../firebase/Firebase'


export const CreateNote = () => {
    const[title, setTitle] = useState(''); //Valor actual del estado y función que permite alterar los datos
    const[description, setDescription] = useState('');
    const[error, setError] = useState('');

    const setNote = (e) => {
        e.preventDefault()
        if(!title.trim()){ //Para saber si esta vacío el campo título
            setError('El campo Título está vacío')
        }
        if(!description.trim()){
            setError('El campo Escribir texto está vacío')
        }
        setCollection(title, description);
        setTitle('');
        setDescription('');
    }
    
    return(
    <div className = "createNote">      
         <div id="crearNota" className="crearNota">
            <div className="nota">
                <a href="#" className="cerrar">x</a>
                <form className="form" onSubmit={setNote}>
                    <input 
                        value={title}
                        onChange={(e)=>{setTitle(e.target.value)}} //Para obtener el valor del input
                        type="text" placeholder="Título" 
                        className="titulo" 
                    />
                    <textarea 
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}} 
                        type="text" 
                        placeholder="Escribir nota">                            
                    </textarea>
                    <button>Guardar</button>
                </form>
                    {error ?
                    (
                        <div>
                            <p>{error}</p>
                        </div>
                    )
                    :
                    (
                        <span></span>
                    )}
            </div>
        </div> 
    </div>
    );
}
//UseState: Estado de la aplicación, son datos que pertenecen a un componente
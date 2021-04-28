import React, { useState } from 'react';
import './CreateNote.css';
import { db } from '../firebase/Firebase'


export const CreateNote = (props) => {
    const [title, setTitle] = useState(props.note ? props.note.title : ""); //Valor actual del estado y función que permite alterar los datos
    const [description, setDescription] = useState(props.note ? props.note.description : "");
    //const[error, setError] = useState('');

    // const setNote = (e) => {
    //     e.preventDefault()
    //     if(!title.trim()){ //Para saber si esta vacío el campo título
    //         setError('El campo Título está vacío')
    //     }
    //     if(!description.trim()){
    //         setError('El campo Escribir texto está vacío')
    //     }
    //     setCollection(title, description);
    //     setTitle('');
    //     setDescription('');
    // }

    const setCollection = async (e) => {
        if (props.note) {
            const newNote = {
                title: title,
                description: description
            };
            try {
                await db.doc(`notes/${props.note.id}`).update(newNote);
                console.log('Nota exitosa')
            } catch (error) {
                console.log('Nota fallida', error);
            }
            db.collection('notes');
        } else {
            const writeNote = {
                title: title,
                description: description
            };
            try {
                await db.collection('notes').add(writeNote);
                console.log('Nueva nota creada');
            }
            catch (error) {
                console.log('Fallo la nueva nota', error);
            }
        }
    };

    return (

        <>
            <form className="forma" onSubmit={setCollection}>
                    <input
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} //Para obtener el valor del input
                        type="text" placeholder="Título"
                    ></input>
                    <textarea
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                        type="text"
                        placeholder="Escribir nota">
                    </textarea>
                <button className="buttonSave" type="submit">Guardar</button>

            </form>

        </>
        
    );
}
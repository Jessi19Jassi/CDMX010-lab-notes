import React, {useEffect, useState} from 'react';
import { getNotes, deleteNotes } from '../firebase/Firebase';


export const PrintNote = () => {
    const[note, setNote] = useState([])

    useEffect(() => {
        const print = async () => {
            const { docs } = await getNotes;
            const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setNote(newArray);
        
        //Mapea la respuesta de firestore, se devuelve un objeto en el array, el objeto contiene las propiedades(id, data(title,description))
        // setNote(res)
    }
    print();
}, [])
    
    const deleteN = async (id) => {
            await deleteNotes(id)
            const { docs } = await getNotes;
            const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setNote(newArray);
    }
    
    return(
        <>
            <ul>
                {
                    note.length !== 0 ? (
                        note.map(item => (
                            <div key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <button>Editar</button>
                            <button onClick={(id) => { deleteN(item.id) }}>Borrar</button>
                            </div>
                        ))
                    ):(
                        
                            <span>No hay notas que mostrar</span>
                        )
                }
            </ul>
        </>

    )
}
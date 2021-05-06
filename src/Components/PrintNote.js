import React, {useEffect, useState} from 'react';
import { getNotes, deleteNotes } from '../firebase/Firebase';
import { Modal } from './Modal'
import './PrintNote.css'
import edit from '../images/edit.png'
import deleteAll from '../images/deleteAll.png'


export const PrintNote = () => {
    const[note, setNote] = useState([])
    const [open, setOpen] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null)
    
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

    const hideModal = () => {
        console.log('closing modal')
        setOpen(false);
    };

    const showModal = () => {
        setOpen(true);
        console.log('funciono')
    };
    
    const deleteN = async (id) => {
            await deleteNotes(id)
            const { docs } = await getNotes;
            const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
            setNote(newArray);
    }

    return(
        <>
            <div className="wall">
                   { 
                   note.length !== 0 ? (
                        note.map((item) => (
                            <div className="containerOne" key={item.id}>
                                <div className="containerTwo">
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <a href="#" onClick={()=> {setSelectedNote(item); showModal() }}><img className="buttonEdit" src={edit} alt="edit"></img></a>
                                    <a href="#" onClick={(id) => { deleteN(item.id); }}><img className="buttonDelete" src={deleteAll} alt="deleteAll"></img></a>
                                </div>
                            </div>
                        ))
                    ):(
                        
                        <span>No hay notas que mostrar</span>
                        )
                    }
            </div>
                <footer>
                    <button className ="buttonCreate" onClick={() =>{ showModal() }}>Escribir nueva nota</button>
                </footer>
                <Modal onClose={hideModal} open={open} note={selectedNote} />
        </>
    )
}
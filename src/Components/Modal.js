import React from 'react'
import { CreateNote } from './CreateNote'
import './Modal.css';


export const Modal = (props) => {
    return(
        props.open && (
            <div className="modalContent">
                <div className="myModal">
                    <CreateNote note={props.note} />

                    <button className="close" onClick={props.onClose}>Cerrar</button>
                </div>
            </div>
        )
    );
}
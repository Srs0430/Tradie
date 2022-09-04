import React from "react";
import Notes from "./notes";
import "./modal.css"

function Modal(props){

    if (!props.open) return null;

    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <button className="close-btn" onClick={props.closeModal}> X </button>
                <div className="title">{props.name}</div>
                <div className="body">{props.id}</div>
                <Notes />
                <div className="footer">
                <button onClick={props.closeModal}>Cancel</button>
                </div>
                
            </div>
        </div>
    )
    }

export default Modal;
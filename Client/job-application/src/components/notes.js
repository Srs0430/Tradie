import { useState } from "react";
import React from 'react';
import './notes.css'

function Notes() {
  const [written, setWritten] = useState("");
  const [note, setNote] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editNum, setEditNum] = useState(0);

  function submitNotes(){
    if (!edit){
    setNote([...note,  written]); document.getElementById("note").value = "";
  } else{
    setNote([...note[0, edit],  written, ...note[edit+1,note.length]]); document.getElementById("note").value = "";
  }
  }
  return (
    <div className="notes">
      
      <div className="note-input">
      <textarea
        type="text"
        name="note"
        id ="note"
        className="note"
        onChange={(event) => {
          setWritten(event.target.value);
        }}
      />
      <button onClick={submitNotes} className="submit-button" >
        Submit
      </button>
      </div>
      {edit&&<h2>Editing</h2>}
      <br />
      <ul>
        {note.map(i=>(
          <li key={i}>{i} <button onClick={(i) => {
            setEditNum(note.indexOf(i));
            setEdit(true); console.log(editNum)}
          }>Edit</button>{edit&&<button onClick={() =>{setEdit(false)}}>Cancel</button>}</li>
        ))}
      </ul>
      
    </div>
  );}

export default Notes;

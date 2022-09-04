import { useState } from "react";
import React from 'react';
import './notes.css'

function Notes() {
  const [written, setWritten] = useState("");
  const [note, setNote] = useState([]);

  return (
    <div className="notes">
      
      <textarea
        type="text"
        name="note"
        className="note"
        onChange={(event) => {
          setWritten(event.target.value);
        }}
      />
      <button onClick={()=>{setNote([...note,  written]);}} className="submit-button" >
        Submit
      </button>
      <br />
      <ul>
        {note.map(i=>(
          <li key={i}>{i}</li>
        ))}
      </ul>
      
    </div>
  );
}
export default Notes;

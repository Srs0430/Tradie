import { useState, useEffect } from "react";
import React from 'react';
import Status from "./status";
import Dates from "./creation-date";
import Modal from "./modal";
import './job-cards.css';



function Job_card(props) {
  const [tradeeID, setTradeeID] = useState("");
  const [name, setName] = useState("");
  const [visable, setVisable] = useState(false)

  useEffect(() => {
    setName(props.firstname + " "+ props.lastname);
    setTradeeID(props.id);
  });

  return (
    <div className="job-card">
      <h1>
        Name: {name} Id:{tradeeID}
      </h1>
      <Status />
      <Dates date={props.date} time={props.time} />
      {visable && <Modal name={name} id={tradeeID} contact= {props.contact} open={visable} date={props.date} time={props.time} closeModal = {()=>{setVisable(false)}}/>}
      <button onClick={() =>{
      setVisable(true)
    }}>View</button>
    </div>
  );
}
export default Job_card;

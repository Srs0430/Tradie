import { useState, useEffect } from "react";
import React from 'react';

function CreationDate(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setDate(props.date);
    setTime(props.time);
  });
  return (
    <div>
      {date} {time}
    </div>
  );
}

export default CreationDate;

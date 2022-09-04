import React from 'react';

function Status() {
  return (
    <select>
      <option value="Scheduled">Scheduled</option>
      <option value="Active">Active</option>
      <option value="Invoicing">Invoicing</option>
      <option value="To Priced">To Priced</option>
      <option value="Completed">Completed</option>
    </select>
  );
}
export default Status;

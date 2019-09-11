import React, { useState } from 'react';
import './Date.css';

const Date = props => {
  const [selectedDate, changeSelectedDate] = useState(0);
  return (
    <div>
      <p>Current Date - {props.date}</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.setdate(selectedDate);
          changeSelectedDate(null);
        }}
      >
        <input type="date" onChange={e => changeSelectedDate(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Date;

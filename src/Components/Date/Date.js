import React, { useState } from 'react';
import './Date.css';
import moment from 'moment';

const Date = props => {
  const [selectedDate, changeSelectedDate] = useState(0);
  return (
    <div>
      <p>Current Date - {moment(props.date).fromNow()}</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.setdate(selectedDate);
          changeSelectedDate(null);
        }}
      >
        <input
          type="date"
          className="datePicker"
          onChange={e => changeSelectedDate(e.target.value)}
          required="required"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Date;

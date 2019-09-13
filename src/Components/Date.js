import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Input = styled.input`
  border: none;
  width: 200px;
  height: 30px;
  border-radius: 10px;
  padding-left: 10px;
  ::-webkit-datetime-edit {
    padding: 2 em;
  }
  ::-webkit-datetime-edit-text {
    color: blue;
    padding: 0 0.3em;
  }
  ::-webkit-datetime-edit-month-field {
    color: blue;
  }
  ::-webkit-datetime-edit-day-field {
    color: blue;
  }
  ::-webkit-datetime-edit-year-field {
    color: blue;
  }
`;

const Submit = styled.input`
  width: 150px;
  height: 35px;
  margin-top: 10px;
  background-color: blue;
  border: none;
  border-radius: 15px;
  outline: none;
  color: white;
  font-family: 'Fjalla One', sans-serif;

  &:hover {
    transform: scale(1.1);
  }
`;

const Date = props => {
  const [selectedDate, changeSelectedDate] = useState(0);
  return (
    <div>
      <p>Selected Date - {moment(props.date).format('MMMM Do YYYY')}</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.setdate(selectedDate);
          changeSelectedDate(null);
        }}
      >
        <Input
          type="date"
          className="datePicker"
          onChange={e => changeSelectedDate(e.target.value)}
          required="required"
        />
        <br />
        <Submit type="submit" />
      </form>
    </div>
  );
};

export default Date;

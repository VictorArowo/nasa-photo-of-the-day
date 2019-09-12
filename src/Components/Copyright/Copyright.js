import React from 'react';
import './Copyright.css';

const Copyright = props => {
  return (
    <div className="copyright">
      &copy; {props.copyright} - All Right Reserved
    </div>
  );
};

export default Copyright;

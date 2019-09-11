import React from 'react';
import './Media.css';

const Media = props => {
  return <img src={props.url} className="media" alt="potd" />;
};

export default Media;

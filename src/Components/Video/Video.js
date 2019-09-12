import React from 'react';
import './Video.css';

const Video = props => {
  return <iframe src={props.url} className="video" title="video"></iframe>;
};

export default Video;

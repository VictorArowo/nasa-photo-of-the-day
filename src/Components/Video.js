import React from 'react';
import styled from 'styled-components';

const Iframe = styled.iframe`
  width: 800px;
  height: 800px;
`;
const Video = props => {
  return <Iframe src={props.url} className="video" title="video"></Iframe>;
};

export default Video;

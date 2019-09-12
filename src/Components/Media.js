import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 800px;
  height: 800px;
  border-radius: 50%;
`;

const Media = props => {
  return <Image src={props.url} className="media" alt="potd" />;
};

export default Media;

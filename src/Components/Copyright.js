import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin-bottom: 50px;
`;

const Copyright = props => {
  return <Div>&copy; {props.copyright} - All Right Reserved</Div>;
};

export default Copyright;

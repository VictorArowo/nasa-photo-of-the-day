import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: auto;
  height: 100px;
`;

const Logo = () => {
  return (
    <Image
      className="logo"
      src="https://www.stickpng.com/assets/images/58429400a6515b1e0ad75acc.png"
      alt="logo"
    />
  );
};

export default Logo;

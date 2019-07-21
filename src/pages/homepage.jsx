import React from 'react';
import styled from 'styled-components';
import MenuItem from '../components/menu-item';
import Menu from '../components/menu';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  );
};

export default HomePage;

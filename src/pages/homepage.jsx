import React from 'react';
import styled from 'styled-components';
import Menu from '../components/menu';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const HomePage = props => {
  console.log(props);
  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  );
};

export default HomePage;

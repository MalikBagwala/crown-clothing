import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  min-width: 30%;
  height: ${props => (props.size === 'large' ? '380px' : '240px')};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0 7.5px 15px;
  &:hover {
    cursor: pointer;
  }
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: url(${props => props.background});
  background-size: cover;
  background-position: center;
  ${Item}:hover & {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;
const Content = styled.div`
  position: absolute;
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  ${Item}:hover & {
    opacity: 0.9;
  }
`;

const Title = styled.h1`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bold;
  margin: 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`;

const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  text-transform: uppercase;
`;
const MenuItem = ({ title, imgUrl, size, subtitle = 'SHOP NOW' }) => {
  return (
    <Item background={imgUrl} size={size}>
      <Background background={imgUrl} size={size} />
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Content>
    </Item>
  );
};

export default MenuItem;

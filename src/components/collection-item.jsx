import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;

const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-image: url(${props => props.imageUrl});
  background-position: center;
  margin-bottom: 5px;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Subtitle = styled.span`
  font-size: 1.4rem;
`;
const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <Item>
      <Image imageUrl={imageUrl} />
      <Footer>
        <Subtitle>{name}</Subtitle>
        <Subtitle>{price} $</Subtitle>
      </Footer>
    </Item>
  );
};

export default CollectionItem;

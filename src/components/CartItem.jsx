import React from 'react';
import styled from 'styled-components';
const Div = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;
const IMG = styled.img`
  width: 30%;
`;
const Details = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  .name {
    font-size: 16px;
  }
`;

const Text = styled.span`
  font-size: ${props => props.name && '16px'};
`;

const CartItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  return (
    <Div>
      <IMG src={imageUrl} />
      <Details>
        <Text name={true}>{name}</Text>
        <Text>
          {quantity} x ${price}
        </Text>
      </Details>
    </Div>
  );
};

export default CartItem;

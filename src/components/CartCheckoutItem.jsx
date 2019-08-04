import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { clearItem, addItem, removeItem } from '../redux/actions/cart.action';

const Div = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  /* text-align: center; */
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  /* padding-right: 15px; */
`;

const IMG = styled.img`
  width: 60%;
  height: 60%;
`;

const Span = styled.span`
  width: 23%;
`;

const Quantity = styled(Span)`
  padding-left: 20px;
`;

const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

const CartCheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  return (
    <Div>
      <ImageContainer>
        <IMG src={cartItem.imageUrl} />
      </ImageContainer>
      <Span>{cartItem.name}</Span>
      <Quantity>
        <span
          style={{ marginRight: 5, cursor: 'pointer' }}
          onClick={() => addItem(cartItem)}
        >
          &#10094;
        </span>
        {cartItem.quantity}
        <span
          style={{ marginLeft: 5, cursor: 'pointer' }}
          onClick={() => removeItem(cartItem)}
        >
          &#10095;
        </span>
      </Quantity>
      <Span>${cartItem.price}</Span>
      <RemoveButton onClick={e => clearItem(cartItem.id)}>
        &#10006;
      </RemoveButton>
    </Div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: itemID => dispatch(clearItem(itemID)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CartCheckoutItem);

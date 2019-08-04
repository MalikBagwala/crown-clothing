import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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

const CartCheckoutItem = ({ cartItem }) => {
  return (
    <Div>
      <ImageContainer>
        <IMG src={cartItem.imageUrl} />
      </ImageContainer>
      <Span>{cartItem.name}</Span>
      <Quantity>{cartItem.quantity}</Quantity>
      <Span>${cartItem.price}</Span>
      <RemoveButton>&#10006;</RemoveButton>
    </Div>
  );
};
const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartCheckoutItem);

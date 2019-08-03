import React from 'react';
import Button from '../common/Button';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Div = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: ${props => (props.hidden ? 'none' : 'flex')};
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 120px;
  right: 70px;
  z-index: 5;
`;

const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  /* overflow: scroll; */
`;
const CartButton = styled(Button)`
  margin-top: auto;
`;
const CartDropdown = ({ cartStatus }) => {
  return (
    <Div hidden={cartStatus}>
      <CartItems />
      <CartButton>Go To Checkout</CartButton>
    </Div>
  );
};

const mapStateToProps = root_state => ({
  cartStatus: root_state.cart.hidden
});
export default connect(mapStateToProps)(CartDropdown);

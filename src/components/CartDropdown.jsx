import React from 'react';
import Button from '../common/Button';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CartItem from './CartItem';

const Div = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 120px;
  right: 70px;
  z-index: 5;
`;

const CartItems = styled.div`
  height: 270px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
const CartButton = styled(Button)`
  margin-top: auto;
`;
const CartDropdown = ({ cartHidden, cartItems }) => {
  console.log(cartItems);
  return cartHidden ? null : (
    <Div>
      <CartItems>
        {cartItems.map(item => (
          <CartItem item={item} />
        ))}
      </CartItems>
      <CartButton>Go To Checkout</CartButton>
    </Div>
  );
};

const mapStateToProps = root_state => ({
  cartHidden: root_state.cart.hidden,
  cartItems: root_state.cart.cartItems
});
export default connect(mapStateToProps)(CartDropdown);

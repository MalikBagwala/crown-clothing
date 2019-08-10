import React from 'react';
import Button from '../common/Button';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CartItem from './CartItem';
import { createStructuredSelector } from 'reselect';

import {
  selectCartHidden,
  selectCartItems
} from '../redux/selectors/cart.selector';
import { withRouter } from 'react-router-dom';
import { toggleCart } from '../redux/actions/cart.action';
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
const CartDropdown = ({ cartHidden, cartItems, history, toggleCart }) => {
  return cartHidden ? null : (
    <Div>
      <CartItems>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItems>
      <CartButton
        onClick={() => {
          toggleCart();
          history.push('/checkout');
        }}
      >
        Go To Checkout
      </CartButton>
    </Div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartHidden: selectCartHidden,
  cartItems: selectCartItems
});
const mapDispatchToProps = dispatch => ({
  // The component will recieve setCurrentUser a function from props
  toggleCart: () => dispatch(toggleCart())
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartDropdown)
);

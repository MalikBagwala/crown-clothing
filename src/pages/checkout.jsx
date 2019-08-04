import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal
} from '../redux/selectors/cart.selector';
import CartCheckoutItem from '../components/CartCheckoutItem';
const Div = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

const Header = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  font-size: 1.2rem;
  &:last-child {
    width: 8%;
  }
`;

const CheckoutPage = ({ cartItems, cartTotal }) => {
  console.log(cartTotal);
  return (
    <Div>
      <Header>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </Header>
      {cartItems.map(cartItem => (
        <CartCheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <h2>TOTAL - ${cartTotal}</h2>
    </Div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

const mapDispatchToProps = dispatch => ({
  // The component will recieve  a function from props
  // : (param) => dispatch((param))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);

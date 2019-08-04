import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal
} from '../redux/selectors/cart.selector';
import CartCheckoutItem from '../components/CartCheckoutItem';
import StripeButton from '../common/StripeButton';
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

const Warning = styled.div`
  display: flex;
  flex-direction: column;
`;

const H4 = styled.h4`
  color: red;
`;

const P = styled.p`
  margin: 3px 0;
  color: red;
  font-size: 1.3rem;
`;

const CheckoutPage = ({ cartItems, cartTotal }) => {
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
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        <h2 style={{ marginRight: 20 }}>TOTAL - ${cartTotal}</h2>
        <StripeButton price={cartTotal} />
      </div>
      <Warning>
        <H4>*Test Card Details*</H4>
        <P>Card Number : 4242 4242 4242 4242 </P>
        <P>Expiration Date : 02/30 </P>
        <P>CVV : 999 </P>
      </Warning>
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

import React from 'react';
import { ReactComponent as ShoppingIcon } from '../img/shopping-bag.svg';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleCart } from '../redux/actions/cart.action';
import { selectCartItemsCount } from '../redux/selectors/cart.selector';
const Cart = styled.span`
  margin-left: 1rem;
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Icon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;
const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
const CartIcon = ({ toggleCart, totalItems }) => {
  return (
    <Cart onClick={toggleCart}>
      <Icon />
      <ItemCount>{totalItems}</ItemCount>
    </Cart>
  );
};

const mapStateToProps = state => ({
  totalItems: selectCartItemsCount(state)
});
const mapDispatchToProps = dispatch => ({
  // The component will recieve toggleCart a function from props
  toggleCart: () => dispatch(toggleCart())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);

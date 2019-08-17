import React, { Component } from 'react';
import { ReactComponent as Logo } from '../img/crown.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../common/CartIcon';
import CartDropdown from './CartDropdown';
const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
  margin-left: 1rem;
  opacity: 1;
  cursor: pointer;
  text-transform: uppercase;
  &::hover {
    color: gray !;
  }
`;

const SignOut = styled.span`
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
  margin-left: 1rem;
  opacity: 1;
  cursor: pointer;
  text-transform: uppercase;
  &::hover {
    color: gray !;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class Header extends Component {
  render() {
    const { currentUser: user, cartStatus } = this.props;

    return (
      <Navbar>
        <NavItem to="/">
          <Logo />
        </NavItem>
        <Div>
          <NavItem to="/shop">Shop</NavItem>
          <NavItem to="/contact">contact</NavItem>
          {user !== null ? (
            <SignOut onClick={() => auth.signOut()}>sign out</SignOut>
          ) : (
            <NavItem to="/register">Sign In</NavItem>
          )}
          <CartIcon />
        </Div>
        <CartDropdown hidden={cartStatus} />
      </Navbar>
    );
  }
}
const mapStateToProps = root_state => ({
  currentUser: root_state.user.currentUser,
  cartStatus: root_state.cart.hidden
});
export default connect(mapStateToProps)(Header);

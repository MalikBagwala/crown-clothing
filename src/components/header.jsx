import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../img/crown.svg';
import { auth } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
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
const Header = ({ currentUser: user }) => {
  return (
    <Navbar>
      <NavItem to="/">
        <Logo />
      </NavItem>
      <div>
        <NavItem to="/shop">Shop</NavItem>
        <NavItem to="/contact">contact</NavItem>
        {user !== null ? (
          <SignOut onClick={() => auth.signOut()}>sign out</SignOut>
        ) : (
          <NavItem to="/register">Sign In</NavItem>
        )}
      </div>
    </Navbar>
  );
};
const mapStateToProps = root_state => ({
  currentUser: root_state.user.currentUser
});
export default connect(mapStateToProps)(Header);

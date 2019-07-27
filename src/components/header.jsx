import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../img/crown.svg';
import { auth } from '../firebase/firebase.utils';
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
const Header = ({ currentUser }) => {
  return (
    <Navbar>
      <NavItem to="/">
        <Logo />
      </NavItem>
      <div>
        <NavItem to="/shop">Shop</NavItem>
        <NavItem to="/contact">contact</NavItem>
        {currentUser ? (
          <SignOut onClick={() => auth.signOut()}>sign out</SignOut>
        ) : (
          <NavItem to="/register">register</NavItem>
        )}
      </div>
    </Navbar>
  );
};

export default Header;

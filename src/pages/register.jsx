import React from 'react';
import SignIn from '../components/register/sign-in';
import SignUp from '../components/register/sign-up';
import styled from 'styled-components';

const StyledRegister = styled.div`
  display: flex;

  justify-content: space-around;
`;

const RegisterPage = () => {
  return (
    <>
      <StyledRegister>
        <SignIn />
        <SignUp />
      </StyledRegister>
    </>
  );
};

export default RegisterPage;

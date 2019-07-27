import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  width: 40%;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  background: ${props => (props.primary ? 'blue' : 'rgba(0, 0, 0, 0.9)')};
  opacity: 1;
  color: white;
  outline: none;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;
const Button = ({ text, children, ...otherProps }) => {
  return <Btn {...otherProps}>{text || children}</Btn>;
};

export default Button;

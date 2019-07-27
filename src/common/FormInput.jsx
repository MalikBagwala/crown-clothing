import React from 'react';
import styled from 'styled-components';
const FormGroup = styled.div`
  position: relative;
  margin: 3rem 0;
`;
const Input = styled.input`
  position: relative;
  width: 100%;
  background: ${props => (props.shrink ? '#c6e5ff' : 'white')};
  border: none;
  border-bottom: #2f4858 1.5px solid;
  padding: 0.5rem 0.15rem;
  font-size: 1.3rem;
  color: #2f4858;
  z-index: 1;
`;

const Label = styled.label`
  position: absolute;
  top: ${props => (props.shrink ? '-2.0rem' : '2px')};
  left: ${props => (props.shrink ? '0' : '5px')};
  transition: all 0.2s ease-in;
  color: black;
  font-size: ${props => (props.shrink ? '1rem' : '1.7rem')};
  z-index: 2;
`;

const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <FormGroup>
      {label && <Label shrink={otherProps.value.length !== 0}>{label}</Label>}
      <Input
        shrink={otherProps.value.length !== 0}
        onChange={handleChange}
        {...otherProps}
      />
    </FormGroup>
  );
};

export default FormInput;

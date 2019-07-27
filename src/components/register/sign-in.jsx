import React, { Component } from 'react';
import styled from 'styled-components';
import FormInput from '../../common/FormInput';
import Button from '../../common/Button';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

const Div = styled.div``;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { password, email } = this.state;
    return (
      <div style={{ width: '30%' }}>
        <h1>I already have an account</h1>
        <p>Sign In with your email and password</p>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            value={email}
            type="email"
            name="email"
            handleChange={this.handleChange}
          />
          <FormInput
            label="Password"
            value={password}
            type="password"
            name="password"
            handleChange={this.handleChange}
          />

          <ButtonGroup>
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} primary>
              Using Google
            </Button>
          </ButtonGroup>
        </form>
      </div>
    );
  }
}

export default SignIn;

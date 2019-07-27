import React, { Component } from 'react';
import FormInput from '../../common/FormInput';
import Button from '../../common/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { password, confirmPassword, email, displayName } = this.state;

    if (password !== confirmPassword) {
      return alert("Passwords Don't Match");
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserProfileDocument(user, { displayName });
        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } catch (error) {
        console.error(error);
      }
    }
  };
  render() {
    const { email, password, displayName, confirmPassword } = this.state;
    return (
      <div style={{ width: '30%' }}>
        <h1>I dont have an account</h1>
        <p>Sign Up with your email and password</p>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Name"
            value={displayName}
            type="text"
            name="displayName"
            handleChange={this.handleChange}
          />
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
            name="password"
            type="password"
            handleChange={this.handleChange}
          />
          <FormInput
            label="Confirm Password"
            value={confirmPassword}
            name="confirmPassword"
            type="password"
            handleChange={this.handleChange}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;

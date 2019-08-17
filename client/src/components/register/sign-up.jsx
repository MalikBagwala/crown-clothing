import React, { Component } from 'react';
import FormInput from '../../common/FormInput';
import Button from '../../common/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { toast } from 'react-toastify';
import validateUser from '../../models/User';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {}
  };
  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value }, () => {
      this.setState({ errors: validateUser(_.omit(this.state, 'errors')) });
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { password, email, displayName, errors } = this.state;
    if (Object.keys(errors).length > 0) {
      console.log(errors);
      return alert('Errors');
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
        toast.success(`User ${displayName} registered successfully `);
      } catch (error) {
        console.log(error);
        toast.error(error.message, { position: toast.POSITION.TOP_RIGHT });
      }
    }
  };
  render() {
    const {
      email,
      password,
      displayName,
      confirmPassword,
      errors
    } = this.state;
    return (
      <div style={{ width: '30%' }}>
        <h1>I dont have an account</h1>
        <p>Sign Up with your email and password</p>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            error={errors.displayName}
            label="Name"
            value={displayName}
            type="text"
            name="displayName"
            handleChange={this.handleChange}
          />
          <FormInput
            error={errors.email}
            label="Email"
            value={email}
            type="email"
            name="email"
            handleChange={this.handleChange}
          />
          <FormInput
            error={errors.password}
            label="Password"
            value={password}
            name="password"
            type="password"
            handleChange={this.handleChange}
          />
          <FormInput
            error={errors.confirmPassword}
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

export default withRouter(SignUp);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createStructuredSelector } from 'reselect';
import { Wrapper } from './common/utils';
import Header from './components/header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import CheckoutPage from './pages/checkout';
import HomePage from './pages/homepage';
import RegisterPage from './pages/register';
import ShopPage from './pages/shop';
import { setCurrentUser } from './redux/actions/user.action';
import { selectCurrentUser } from './redux/selectors/user.selector';
class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <Wrapper>
        <ToastContainer />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            path="/register"
            render={() =>
              currentUser ? <Redirect to="/" /> : <RegisterPage />
            }
          />
        </Switch>
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  // The component will recieve setCurrentUser a function from props
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

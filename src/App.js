import React, { Component } from 'react';
import HomePage from './pages/homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop';
import { Wrapper } from './common/utils';
import Header from './components/header';
import RegisterPage from './pages/register';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/actions/user.action';
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
    console.log(currentUser);
    return (
      <Wrapper>
        <ToastContainer />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
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

const mapStateToProps = root_state => ({
  currentUser: root_state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  // The component will recieve setCurrentUser a function from props
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

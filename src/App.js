import React, { Component } from 'react';
import HomePage from './pages/homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop';
import { Wrapper } from './common/utils';
import Header from './components/header';
import RegisterPage from './pages/register';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            () => {
              console.log(this.state.currentUser);
            }
          );
        });
      }
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.state;
    return (
      <Wrapper>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </Wrapper>
    );
  }
}

export default App;

import React, { Component } from 'react';
import CollectionOverview from '../components/collection-overview';
import { Route } from 'react-router-dom';
import CategoryPage from '../components/category';
import { firestore, convertSnapshotToMap } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from '../redux/actions/shop.action';
class ShopPage extends Component {

  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(data => {
      const newData = convertSnapshotToMap(data);
      updateCollections(newData);

    })
  }
  render() {
    const { match } = this.props;
    return <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:category`} component={CategoryPage} />
    </div>
  }
}
const mapDispatchToProps = dispatch => ({
  // The component will recieve updateCollections a function from props
  updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
});

// const mapDispatchToProps = dispatch => ({
//   // The component will recieve toggleCart a function from props
//   toggleCart: () => dispatch(toggleCart())
// });
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CartIcon);
export default connect(null, mapDispatchToProps)(ShopPage);

import React from 'react';
import CollectionOverview from '../components/collection-overview';
import { Route } from 'react-router-dom';
import CategoryPage from '../components/category';
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:category`} component={CategoryPage} />
  </div>
);

export default ShopPage;

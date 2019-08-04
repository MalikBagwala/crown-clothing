import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    Object.keys(collections).map(collectionName => collections[collectionName])
);
export const selectCollection = collectionID =>
  createSelector(
    [selectCollections],
    collections => collections[collectionID]
  );

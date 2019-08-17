import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { selectCollectionsForPreview } from '../redux/selectors/shop.selector';
import CollectionPreview from './collection';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionOverview = ({ collections }) => {
  return (
    <Div>
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </Div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(
  mapStateToProps,
  null
)(CollectionOverview);

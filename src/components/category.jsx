import React from 'react';
import { selectCollection } from '../redux/selectors/shop.selector';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CollectionItem from './collection-item';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  > div {
    margin-bottom: 40px;
  }
`;

const CategoryPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <Div>
      <H1>{title}</H1>
      <Items>
        {items.map(item => (
          <CollectionItem
            style={{ marginBottom: 40 }}
            key={item.id}
            item={item}
          />
        ))}
      </Items>
    </Div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.category)(state)
});
export default connect(
  mapStateToProps,
  null
)(CategoryPage);

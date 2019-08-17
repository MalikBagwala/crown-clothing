import React from 'react';
import styled from 'styled-components';
import CollectionItem from './collection-item';

const Collection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  text-transform: uppercase;
`;

const Preview = styled.section`
  display: flex;
  justify-content: space-between;
`;

const CollectionPreview = ({ title, items }) => {
  return (
    <Collection>
      <Title>{title}</Title>
      <Preview>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Preview>
    </Collection>
  );
};

export default CollectionPreview;

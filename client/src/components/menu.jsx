import React from 'react';
import styled from 'styled-components';
import { selectDirectorySections } from '../redux/selectors/directory.selector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import MenuItem from './menu-item';
const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Menu = ({ items }) => {
  console.log(items);
  return (
    <DirectoryMenu>
      {items.map(({ ...MenuProps }, index) => (
        <MenuItem key={index} {...MenuProps} />
      ))}
    </DirectoryMenu>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectDirectorySections
});
export default connect(
  mapStateToProps,
  null
)(Menu);

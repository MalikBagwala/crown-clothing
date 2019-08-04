import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { addItem } from '../redux/actions/cart.action';
import { connect } from 'react-redux';
const Item = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;

const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-image: url(${props => props.imageUrl});
  background-position: center;
  margin-bottom: 5px;
  /* position: relative; */
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Subtitle = styled.span`
  font-size: 1.4rem;
`;
const CollectionButton = styled(Button)`
  /* position: absolute;
  top: 40%;
  width: 240px;
  z-index: */
`;
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <Item>
      <Image imageUrl={imageUrl} />
      <CollectionButton onClick={() => addItem(item)}>
        ADD TO CART
      </CollectionButton>
      <Footer>
        <Subtitle>{name}</Subtitle>
        <Subtitle>{price} $</Subtitle>
      </Footer>
    </Item>
  );
};
const mapStateToProps = root_state => ({
  currentUser: root_state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  // The component will recieve setCurrentUser a function from props
  addItem: item => dispatch(addItem(item))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionItem);

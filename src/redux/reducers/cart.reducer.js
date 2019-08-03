import { TOGGLE_CART_HIDDEN, ADD_ITEM } from '../actions/cart.action';
import { addToCartItem } from '../utils/cart.util';
const INITAL_STATE = {
  hidden: true,
  cartItems: []
};
function cartReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addToCartItem(state.cartItems, action.payload)
      };
    default:
      return state;
  }
}

export default cartReducer;

import { UPDATE_COLLECTIONS } from '../actions/shop.action';

const INITIAL_STATE = {
  collections: {}
};

function shopReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
}

export default shopReducer;

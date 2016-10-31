import { SEARCH_COORD } from '../actions/searchEvents';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SEARCH_COORD: return {
      ...state,
      coord: action.payload
    }

    default: return state;
  }
}
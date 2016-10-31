import { ALL_EVENTS } from '../actions/searchEvents';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ALL_EVENTS: return {
      ...state,
      allEvents: action.payload
    }

    default: return state;
  }
}
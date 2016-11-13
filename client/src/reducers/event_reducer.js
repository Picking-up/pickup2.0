import { ALL_EVENTS, EVENT_RADIUS } from '../actions/searchEvents';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ALL_EVENTS: return {
      ...state,
      allEvents: action.payload
    };

    case EVENT_RADIUS: return {
      ...state,
      eventRadius: action.payload
    }

    default: return state;
  }
}
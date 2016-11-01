import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { validate } from '../components/postValidate';
import EventReducer from './event_reducer';
import CoordReducer from './coord_reducer';

import TestReducer from './test';


const rootReducer = combineReducers({
  form: FormReducer,
  event: EventReducer,
  coord: CoordReducer,
  test: TestReducer
});

export default rootReducer;

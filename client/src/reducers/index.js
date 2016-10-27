import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { validate } from '../components/postValidate';
import EventReducer from './event_reducer';

import TestReducer from './test';


const rootReducer = combineReducers({
  form: FormReducer,
  event: EventReducer,
  test: TestReducer
});

export default rootReducer;

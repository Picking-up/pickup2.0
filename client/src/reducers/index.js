import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { validate } from '../components/postValidate';
import EventReducer from './event_reducer';
import CoordReducer from './coord_reducer';
import Authentication from './authReducer';
import EventModalReducer from './eventModal_reducer';
import errorMessage from './error';
import TestReducer from './test';


const rootReducer = combineReducers({
  form: FormReducer,
  event: EventReducer,
  eventModal: EventModalReducer,
  coord: CoordReducer,
  test: TestReducer,
  auth: Authentication,
  error: errorMessage
});

export default rootReducer;

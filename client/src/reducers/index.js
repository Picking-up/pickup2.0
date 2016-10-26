import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { validate } from '../components/postValidate';

const rootReducer = combineReducers({
  form:FormReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import GroupReducer from './group_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupReducer
});

export default rootReducer;

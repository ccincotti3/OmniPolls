import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import GroupReducer from './group_reducer';
import QuestionReducer from './question_reducer';
import ErrorReducer from './error_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupReducer,
  questions: QuestionReducer,
  errors: ErrorReducer
});

export default rootReducer;

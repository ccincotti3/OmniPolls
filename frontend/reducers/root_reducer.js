import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import GroupReducer from './group_reducer';
import QuestionReducer from './question_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupReducer,
  questions: QuestionReducer
});

export default rootReducer;

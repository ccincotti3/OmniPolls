import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import GroupReducer from './group_reducer';
import QuestionReducer from './question_reducer';
import ErrorReducer from './error_reducer';
import SelectionReducer from './selection_reducer';
import PossibleResponseReducer from './possible_response_reducer';
import ResponseReducer from './response_reducer';
import ActiveReducer from './active_reducer'

const rootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupReducer,
  questions: QuestionReducer,
  errors: ErrorReducer,
  selection: SelectionReducer,
  possibleResponses: PossibleResponseReducer,
  responses: ResponseReducer,
  active: ActiveReducer
});

export default rootReducer;

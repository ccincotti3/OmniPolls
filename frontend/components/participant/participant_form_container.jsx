import { connect } from 'react-redux';
import ParticipantForm from './participant_form';
import { createResponse } from '../../actions/response_actions';
import { fetchPossibleResponses } from '../../actions/possible_response_actions';
import { fetchQuestion } from '../../actions/question_actions';
import { allGroups } from '../../reducers/selectors';
import { fetchActive } from '../../actions/active_actions';

const mapStateToProps = ({responses, questions, possibleResponses, active}, ownProps) => ({
  responses,
  question: active.question,
  choices: allGroups(possibleResponses),
});

const mapDispatchToProps = (dispatch) => ({
  createResponse: (params) => dispatch(createResponse(params)),
  fetchPossibleResponses: (question_id) => dispatch(fetchPossibleResponses(question_id)),
  fetchQuestion: (question_id) => dispatch(fetchQuestion(question_id)),
  fetchActive: (username) => dispatch(fetchActive(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantForm);

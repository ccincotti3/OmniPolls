import React from 'react';
import {connect} from 'react-redux';
import PollsShow from './polls_show';
import { withRouter } from 'react-router-dom';
import { fetchQuestion, deleteQuestion, createQuestion, updateQuestion } from '../../actions/question_actions';
import { clearErrors } from '../../actions/error_actions';
import { fetchPossibleResponses } from '../../actions/possible_response_actions';
import { allGroups, responseCount } from '../../reducers/selectors';
import { updateActive, fetchActive } from '../../actions/active_actions';

const mapStateToProps = ({questions, errors, possibleResponses, session, responses, active}, ownProps) => {
  return {
    id: parseInt(ownProps.match.params.id),
    question: questions[ownProps.match.params.id],
    responses: allGroups(possibleResponses),
    errors,
    currentUser: session.currentUser.username,
    responseCount: responseCount(possibleResponses),
    newResponse: responses,
    activeId: active.question.id || -1,
  };

};


const mapDispatchToProps = (dispatch) => ({
  fetchPossibleResponses: id => dispatch(fetchPossibleResponses(id)),
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  clearErrors: () => dispatch(clearErrors()),
  deleteQuestion: (question) => dispatch(deleteQuestion(question)),
  updateQuestion: (question) => dispatch(updateQuestion(question)),
  updateActive: (questionId) => dispatch(updateActive(questionId)),
  fetchActive: () => dispatch(fetchActive()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PollsShow);

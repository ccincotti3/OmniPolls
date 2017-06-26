import React from 'react';
import {connect} from 'react-redux'
import PollsShow from './polls_show'
import { withRouter } from 'react-router-dom';
import { fetchQuestion } from '../../actions/question_actions';
import { clearErrors } from '../../actions/error_actions';
import { fetchPossibleResponses } from '../../actions/possible_response_actions';
import { allGroups } from '../../reducers/selectors'

const mapStateToProps = ({questions, errors, possibleResponses}, ownProps) => ({
  id: ownProps.match.params.id,
  question: questions[ownProps.match.params.id],
  responses: allGroups(possibleResponses),
  errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchPossibleResponses: id => dispatch(fetchPossibleResponses(id)),
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(PollsShow);

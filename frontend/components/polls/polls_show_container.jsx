import React from 'react';
import {connect} from 'react-redux';
import PollsShow from './polls_show';
import { withRouter } from 'react-router-dom';
import { fetchQuestion } from '../../actions/question_actions';
import { clearErrors } from '../../actions/error_actions';
import { fetchPossibleResponses } from '../../actions/possible_response_actions';
import { allGroups, responseCount } from '../../reducers/selectors';

const mapStateToProps = ({questions, errors, possibleResponses, session, responses}, ownProps) => {
  return {
    id: ownProps.match.params.id,
    question: questions[ownProps.match.params.id],
    responses: allGroups(possibleResponses),
    errors,
    currentUser: session.currentUser.username,
    responseCount: responseCount(possibleResponses),
    newResponse: responses,
  };

};


const mapDispatchToProps = (dispatch) => ({
  fetchPossibleResponses: id => dispatch(fetchPossibleResponses(id)),
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(PollsShow);

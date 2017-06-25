import React from 'react';
import {connect} from 'react-redux'
import PollsShow from './polls_show'
import { withRouter } from 'react-router-dom';
import { fetchQuestion } from '../../actions/question_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = ({questions, errors}, ownProps) => ({
  id: ownProps.match.params.id,
  question: questions[ownProps.match.params.id],
  errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(PollsShow);

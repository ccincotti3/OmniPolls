import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion } from '../../actions/question_actions';


const mapDispatchToProps = (dispatch, {groups}) => ({
  createQuestion: (question) => dispatch(createQuestion(question)),
  groups
});

export default connect(
  null,
  mapDispatchToProps
)(QuestionForm);

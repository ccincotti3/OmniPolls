import { connect } from 'react-redux';
import QuestionList from './question_list';
import { deleteQuestion, createQuestion, updateQuestion } from '../../actions/question_actions';

const mapStateToProps = (state) {
  questions: state.questions;
}

const mapDispatchToProps = (dispatch, { questionIds }) => ({
  deleteQuestion: (question) => dispatch(deleteQuestion(question))
  createQuestion: (question) => dispatch(createQuestion(question))
  updateQuestion: (question) => dispatch(updateQuestion(question))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList);

import { connect } from 'react-redux';
import QuestionList from './question_list';
import { deleteQuestion, createQuestion, updateQuestion } from '../../actions/question_actions';
import { questionSelection } from '../../reducers/selectors'

const mapStateToProps = (state, { questionIds }) {
  questions: questionSelection(state.questions, questionIds);
}

const mapDispatchToProps = (dispatch) => ({
  deleteQuestion: (question) => dispatch(deleteQuestion(question))
  createQuestion: (question) => dispatch(createQuestion(question))
  updateQuestion: (question) => dispatch(updateQuestion(question))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList);

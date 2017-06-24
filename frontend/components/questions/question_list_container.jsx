import { connect } from 'react-redux';
import QuestionList from './question_list';
import { deleteQuestion, createQuestion, updateQuestion } from '../../actions/question_actions';
import { questionSelection } from '../../reducers/selectors';
import { selectElement, deselectElement } from '../../actions/selection_actions';

const mapStateToProps = ({questions}, ownProps) => ({
  questions: questionSelection(questions, ownProps.group.questions_array)
});

const mapDispatchToProps = (dispatch) => ({
  deleteQuestion: (question) => dispatch(deleteQuestion(question)),
  createQuestion: (question) => dispatch(createQuestion(question)),
  updateQuestion: (question) => dispatch(updateQuestion(question)),
  selectElement: (question, type) => dispatch(selectElement(question, type)),
  deselectElement: (question, type) => dispatch(deselectElement(question, type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList);

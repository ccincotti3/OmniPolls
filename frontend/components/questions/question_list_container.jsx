import { connect } from 'react-redux';
import QuestionList from './question_list';

import { deleteQuestion } from '../../actions/question_actions';

const mapDispatchToProps = (dispatch, { group }) => ({
  deleteQuestion: () => dispatch(deleteQuestion(question))
});

export default connect(
  null,
  mapDispatchToProps
)(QuestionList);

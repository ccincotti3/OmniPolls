import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion } from '../../actions/question_actions';
import { createResponses } from '../../actions/possible_response_actions';
import { allGroups } from '../../reducers/selectors';

const mapStateToProps = ({groups}) => ({
    groups: allGroups(groups)
})


const mapDispatchToProps = (dispatch) => ({
  createQuestion: (question, responses) => dispatch(createQuestion(question, responses)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);

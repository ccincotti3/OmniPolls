import { connect } from 'react-redux'
import TopBar from './top_bar'
import { deleteQuestion, updateQuestion } from '../../actions/question_actions'
import { deleteGroup } from '../../actions/group_actions'
import { allGroups } from '../../reducers/selectors';


const mapStateToProps = ({selection}) => ({
  selected: Boolean(Object.keys(selection['groups']).length > 0 ||
    Object.keys(selection['questions']).length > 0),
  selectedGroups: Object.keys(selection['groups']),
  selectedQuestions: Object.keys(selection['questions']),
  unGroupedId: selection['ungrouped_id'],
  groupObjects: allGroups(selection['groups']),
  questionObjects: allGroups(selection['questions'])
}) ;

const mapDispatchToProps = (dispatch) => ({
  deleteQuestion: (ids) => dispatch(deleteQuestion(ids)),
  deleteGroup: (ids) => dispatch(deleteGroup(ids)),
  updateQuestion: (question) => dispatch(updateQuestion(question)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);

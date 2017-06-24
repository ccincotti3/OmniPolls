import { connect } from 'react-redux'
import TopBar from './top_bar'
import { deleteQuestion } from '../../actions/question_actions'
import { deleteGroup } from '../../actions/group_actions'


const mapStateToProps = ({selection}) => ({
  selected: Boolean(Object.keys(selection['groups']).length > 0 ||                    Object.keys(selection['questions']).length > 0),
  selectedGroups: Object.keys(selection['groups']),
  selectedQuestions: Object.keys(selection['questions'])
}) ;

const mapDispatchToProps = (dispatch) => ({
  deleteQuestion: (ids) => dispatch(deleteQuestion(ids)),
  deleteGroup: (ids) => dispatch(deleteGroup(ids))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);

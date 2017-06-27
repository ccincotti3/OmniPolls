import { connect } from 'react-redux';
import { fetchGroups, createGroup, deleteGroup, updateGroup, receiveUngroupedId, createGroupforGrouping }
  from '../../actions/group_actions';
import GroupList from './group_list';
import { allGroups } from '../../reducers/selectors';
import {selectElement, deselectElement } from '../../actions/selection_actions';
import { updateQuestion } from '../../actions/question_actions';

const mapStateToProps = ({groups, errors}, ownProps) => ({
  groups: allGroups(groups),
  errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroups: () => dispatch(fetchGroups()),
  createGroup: (group) => dispatch(createGroup(group)),
  deleteGroup: (group) => dispatch(deleteGroup(group)),
  updateGroup: (group) => dispatch(updateGroup(group)),
  selectElement: (group, type) => dispatch(selectElement(group, type)),
  deselectElement: (group, type) => dispatch(deselectElement(group, type)),
  receiveUngroupedId: (id) => dispatch(receiveUngroupedId(id)),
  createGroupforGrouping: (group, questions) => dispatch(createGroupforGrouping(group, questions)),
  updateQuestion: (question) => dispatch(updateQuestion(question)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
